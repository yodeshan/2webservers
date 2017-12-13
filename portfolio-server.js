const http - require('http');

const PORT = 8080;
funciton displayRoot(path, request, response) {

}
funciton displayPortfolio(path, request, response) {

}
funciton display404(path, request, response) {

}


funciton handleRequest(resuest, response) {

}(
	const path = request.url;

	switch (path) {
		case '/';
			dispolayROOT('You are at root');
		case '/portfolio';
			displayPortfolio('Mah portfolio');
		default:
			display404('404');
	}
const server = http.createServer(handleRequest);

server.listen(PORT, funciton(){
	console.log('Yes I am listening');
	console.log('Visit me at http://localhost:${PORT}');
});