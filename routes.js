var { getSalutation } = require('./service');

let sayHello = (req, res) => {
  console.log(`Req Zone: ${Zone.current.name}`);
  getSalutation((salutation) => {
    res.send(salutation);
  })
};


module.exports = {
  sayHello
};
