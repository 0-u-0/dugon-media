const Koa = require('koa');
const Router = require('@koa/router');
const serve = require('koa-static');

class Monitor {
  constructor(port, hub) {
    this.port = port;
    this.hub = hub;
  }
  // TODO(cc): 10/18/24 rename
  toTree() {
    let tree = [];
    for (let [transportId, transport] of this.hub.transports) {
      let t = {}
      if (transport.role === 'pub') {
        let senders = [];
        for (let [senderId,sender] of transport.senders){
          senders.push(senderId);
        }
        t[transportId] = {
          role:'pub',
          senders
        }
      } else if (transport.role === 'sub') {
        let senders = [];
        let receivers = [];
        for (let [senderId,receiver] of transport.receivers){
          senders.push(senderId);
          receivers.push(receiver.id);
        }
        t[transportId] = {
          role:'sub',
          senders,
          receivers
        }
      }
      tree.push(t)
    }

    return tree;
  }

  serve() {

    const app = new Koa();
    const router = new Router();

    app.use(serve('./web'));

    router.get('/tree', async (ctx, next) => {

      ctx.response.type = 'json';
      ctx.response.body = this.toTree();
    });

    app
      .use(router.routes())
      .use(router.allowedMethods());


    app.listen(this.port);
  }
}


module.exports = Monitor;