const http = require('http');
const argv = process.argv;

let dataList = [];

http.get(argv[2], (response) => {

	response.setEncoding('utf-8');

	response.on('data', (data) => {
		if (data.length > 0) {
			dataList.push(data);
		}
	});

	response.on('end', () => {
		let length = 0;
		dataList.forEach((data) => {
			length += data.length;
		});
		console.log(length);

		console.log(dataList.join(''));
	})
	
});
