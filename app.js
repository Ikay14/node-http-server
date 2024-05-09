const http = require('http');
const os = require('os');
const cors = require('cors')

const options = {
  'Access-Control-Allow-Origin': 'http://localhost:5000',
  'Content-Type': 'text/plain'
};

const requestHandler = (req, res) => {

    setTimeout(() => {
        
    
  if (req.url === '/') {
    res.writeHead(200, options);
    res.write('Welcome to the server!')
    res.end()

  } else if (req.url === '/platform') {
    const osType = os.platform()
    res.writeHead(200, options)
    res.write('This system is running on: ' + osType);
    res.end()

  } else if (req.url === '/freememory') {
    const freeMemory = os.freemem() / 1024 / 1024;
    res.writeHead(200, options)
    res.write('Free memory on this system is: ' + freeMemory + 'MB');
    res.end()

  } else if (req.url === '/totalmemory') {
    const totalMemory = os.totalmem() / 1024 / 1024;
    res.writeHead(200, options)

    res.write('Total memory on this system is: ' + totalMemory + 'MB')
    res.end()

  } else if (req.url === '/cpuCores') {
    const cpuCores = os.cpus().length;
    res.writeHead(200, options)
    res.write('Number of CPU cores: ' + cpuCores);
    res.end()

  } else {
    res.writeHead(404, options)
    res.write('Not Found')
    res.end()
  }
}, 1000)

}

const app = http.createServer(requestHandler);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})

