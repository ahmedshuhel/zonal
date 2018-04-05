const async = require('async');
const { Cat } = require('./models');

module.exports = {
  getSalutation: (callback) => {
    async.waterfall([
      (next) => {
        next();
      },
      (next) => {
        const kitty = new Cat({ name: 'Kitty', reqId: Zone.current.name });
        kitty.save().then(() => {
          next();
        });
      },
      (next) => {
        Cat.findOne(Zone.current.wrap((err, kitty) => {
          console.log(`Req End (find): ${Zone.current.name}`);
          next();
        }));
      }
    ], () => callback(Zone.current.name));
  }
};
