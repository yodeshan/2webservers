const http = require('http');
const fs = require('fs'); // FileSystem
const PORT = 8080;

function handleRequest(request, response) {
	fs.readFile("index.html", function(err, data) {
		if (err) {
			throw err;
		}
		response.writeHead(200, {
			"Content-Type": 'text/html'
		});
		respnse.end(data);
	}
}
const server = http.createServer(handleRequest); 

server.listen(PORT, funciton(){
	console.log("Yes I Hear You");
});