var { getSalutation } = require('./service');

let sayHello = (req, res) => {
  getSalutation((salutation) => {
    res.send(salutation);
  })
};


module.exports = {
  sayHello
};
