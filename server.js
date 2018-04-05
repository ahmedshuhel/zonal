require('zone.js');
const uuid = require('uuid4')
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const { Cat } = require('./models');
const app = express();

console.log(`Root zone:${Zone.current.name}`);
mongoose.connect('mongodb://localhost/zonal', () => {
  console.log('Connected');
});

app.use(function (req, res, next) {
  var reqZone = Zone.current.fork({ name: uuid() });
  reqZone.run(() => {
      console.log(`Req Start:${Zone.current.name}`);
      next();
    //});
  });
});

app.get('/', routes.sayHello);

app.listen(2000);
