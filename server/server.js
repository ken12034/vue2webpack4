const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// var rewrites = {'/api': '/posts'}
// server.use(jsonServer.rewriter( rewrites ))

server.use(router);

server.listen(3000, () => {
  // console.log('JSON Server is running');
});
