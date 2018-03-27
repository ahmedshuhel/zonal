var { getSalutation } = require('./service');

let sayHello = (req, res) => {
  res.send(getSalutation());
};


module.exports = {
  sayHello
};
