const jsonServer = require('json-server');
const { FaPortrait } = require('react-icons/fa');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom middleware to log requests
server.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
});

server.use(router);
const port = process.env.NEXT_PUBLIC_SERVER_HOST || 3000
server.listen(port, () => {
    console.log('JSON Server is running', port);
});