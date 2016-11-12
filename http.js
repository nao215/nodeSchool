const http = require('http');

const argv = process.argv;

http.get(argv[2], (response) => {

	response.setEncoding('utf-8');

	response.on('data', (data) => {
		data.split('\n').forEach((char) => {
			console.log(char);
		});
	});
	
});
