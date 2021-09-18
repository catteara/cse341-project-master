// let names = [];

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Create User</title><head>');
        res.write('<body><h1>Welcome! Please, put insert a username below</h1>');
        res.write('<label>Username:<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></label></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List</title><head>');
        res.write('<body><h1>Users</h1><ul>');
        res.write('<li>Username 1</li><li>Name here</li><li>Another username</li>')
        // let len= names.length;
        // for (let i=0; i<= len; i++) {
        //     res.write('<li>');
        //     res.write(names[i]);
        //     res.write('</li>');
        // };
        res.write('</ul></body></html>');
        return res.end();
    }

    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            //names.push(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

module.exports = requestHandler;