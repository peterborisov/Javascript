const fs = require('fs');
const url = require('url');

function getContentType(url) {
    if (url.endsWith('css')) {
        console.log(url)
        return 'text/css';
    } else if (url.endsWith('html')) {
        return 'text/html'
    } else if (url.endsWith('png')) {
        return 'text/png'
    } else if (url.endsWith('js')) {
        return 'text/js'
    }
}

module.exports = (req, res) => {

    const pathName = url.parse(req.url).pathname;

    if (pathName.startsWith('/content') && req.method === 'GET') {
        // let filePath = path.normalize(
        //     path.join(__dirname, '../content/styles/site.css')
        // );
        fs.readFile('./$(pathName)', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': 'text/plain'
                });
                res.write('Error was Found!');
                res.end();
                return;
            };
            console.log(pathName);

            res.writeHead(200, {
                'Content-type': getContentType(pathName)
            })
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}