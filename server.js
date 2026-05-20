// 本地测试服务器：node server.js，然后手机和电脑连同一 WiFi，用电脑 IP 访问
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME = {
  '.html': 'text/html;charset=utf-8',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });

  try {
    res.end(fs.readFileSync(filePath));
  } catch {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(PORT, '0.0.0.0', () => {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  console.log('✅ 服务已启动\n');
  console.log('   本机访问: http://localhost:' + PORT);
  for (const [name, nets] of Object.entries(ifaces)) {
    for (const net of nets) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log('   手机访问: http://' + net.address + ':' + PORT);
      }
    }
  }
  console.log('\n   手机打开后，用 Safari 分享按钮 → "添加到主屏幕" 即可安装');
});
