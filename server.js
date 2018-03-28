require('zone.js');
const uuid = require('uuid4')
const express = require('express');
const routes = require('./routes');
const app = express();


console.log(`Root Zone: ${Zone.current.name}`);

app.use((req, res, next) => {
  let reqZone = Zone.current.fork({ name: uuid() });
  reqZone.req_id = uuid();
  console.log(`Still Root Zone: ${Zone.current.req_id}`);
  reqZone.run(() => {
    console.log(`Req Zone: ${Zone.current.name}`);
    next();
  });
});

app.get('/', routes.sayHello);

app.listen(2000);
