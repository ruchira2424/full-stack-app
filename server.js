const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

  if (req.url === "/api/message") {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Hello from Backend 🚀" }));
  } 
  
  else if (req.url === "/") {
    const filePath = path.join(__dirname, '../frontend/index.html');
    fs.readFile(filePath, (err, data) => {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  } 
  
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
