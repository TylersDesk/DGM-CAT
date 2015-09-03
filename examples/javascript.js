var fs = require('fs');

fs.readdir('/', listFiles);

function listFiles(err, files){
	console.log('Running Callback');
};

fs.readdirSync('./');

console.log('Sync Done');