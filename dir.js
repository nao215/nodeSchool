const fs = require('fs');

fs.readdir(process.argv[2], (err, dir) => {
	dir.filter((name) => name.match(`.${process.argv[3]}`)).forEach((file) => {
		console.log(file);
	});
});

