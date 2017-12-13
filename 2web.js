var http = require("http");

var PORT = 7000;

var PORT2 = 7500;

function goodMessage(request, response) {
	response.end("you're cool!");

}
function badMessage(request, response) {
	response.end("you're NOT cool!");

}
var server = http.createServer(badMessage);
var server1 = http.createServer(goodMessage);

server.listen(PORT);
server.listen(PORT2);

