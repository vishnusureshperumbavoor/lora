const express = require('express');
const app = express();

const ip = '192.168.162.52'; // Replace with your IP address
const port = 3000; // Replace with your desired port number
const localhost = `127.0.0.1:${port}`;

const isLocalhost = ip === 'localhost' || ip === '127.0.0.1' || ip === '::1';
const isIpv4 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip);

const hostname = isLocalhost || !isIpv4 ? localhost : `${ip}:${port}`;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}/`);
});
