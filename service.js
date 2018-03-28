const async = require('async');

module.exports = {
  getSalutation: (callback) => {
    async.waterfall([
      (next) => {
        console.log(`From async: ${Zone.current.name}`);
        next();
      }
    ], () => callback(Zone.current.name));
  }
};
