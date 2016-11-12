const dirModule = require('./dirModule');
const input = process.argv;

dirModule(input[2], input[3], (err, list) => {
	if (err) return console.log('error');
	list.forEach((file) => {
		console.log(file);
	});
});
