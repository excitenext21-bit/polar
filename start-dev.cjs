const { spawn } = require('child_process');
const http = require('http');
const net = require('net');

console.log('Starting Vite on 0.0.0.0:3000 and bridge proxy on 0.0.0.0:5173...');

// Start Vite on port 3000 with host 0.0.0.0
const vite = spawn('node', ['./node_modules/vite/bin/vite.js', '--port', '3000', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

// Proxy port 5173 to 3000 so both localhost:3000 and localhost:5173 work seamlessly
const proxy = http.createServer((req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', () => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Dev server starting up, please refresh in 2 seconds...');
  });

  req.pipe(proxyReq, { end: true });
});

// Support websocket upgrades for Vite HMR on port 5173
proxy.on('upgrade', (req, socket, head) => {
  const proxySocket = net.connect(3000, '127.0.0.1', () => {
    proxySocket.write(head);
    socket.pipe(proxySocket);
    proxySocket.pipe(socket);
  });
  proxySocket.on('error', () => socket.destroy());
});

proxy.listen(5173, '0.0.0.0', () => {
  console.log('Port 5173 is live -> forwarding to port 3000');
});

vite.on('close', (code) => {
  console.log(`Vite exited with code ${code}`);
  proxy.close();
  process.exit(code || 0);
});
