const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String , reqId: String });

module.exports = {
  Cat
}
