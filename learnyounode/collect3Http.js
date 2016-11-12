const http = require('http');
const argv = process.argv;
const dataList = {};
const order = [];
argv.splice(0, 2);

let count = 0;

const handleHttpRequest = (response, url) => {

	response.setEncoding('utf-8');

	response.on('data', (data) => {
		if (order.indexOf(url) === -1) {
			order.push(url);
		}
		if (data.length > 0) {
			if (dataList[url] === undefined) {
				dataList[url] = data;
			} else {
				dataList[url] += data;
			}
		}
	});

	response.on('end', () => {
		count += 1;
		if (count === 3) {
			for (let i = 0; i < argv.length; i++) {
				console.log(dataList[argv[i]]);
			}
		}
	});

};

argv.forEach((url) => {
	http.get(url, (response) => handleHttpRequest(response, url));
});
