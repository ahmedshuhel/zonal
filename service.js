const async = require('async');
const { Cat } = require('./models');

module.exports = {
  getSalutation: (callback) => {
    async.waterfall([
      (next) => {
        console.log(`From async: ${Zone.current.name}`);
        next();
      },
      (next) => {
        const kitty = new Cat({ name: 'Kitty' });
        kitty.save().then(() => {
          console.log(`From mongoose (save): ${Zone.current.name}`);
          next();
        });
      },
      (next) => {
        Cat.findOne((err, kitty) => {
          console.log(kitty.name);
          console.log(`From mongoose (find): ${Zone.current.name}`);
          next();
        });
      }
    ], () => callback(Zone.current.name));
  }
};
