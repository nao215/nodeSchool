const fs = require('fs');
fs.readFile(process.argv[2], (err, txt) => {
	console.log(txt.toString().split('\n').length - 1)
});

