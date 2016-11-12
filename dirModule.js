const fs = require('fs');

module.exports = (dirName, type, callback) => {

	fs.readdir(dirName, (err, dir) => {
		if (err) return callback(err)

		const list = dir.filter((name) => name.match(`.${type}`));

		callback(null, list);
	});

};
