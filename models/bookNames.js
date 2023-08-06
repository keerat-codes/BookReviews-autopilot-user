const mongoose = require('mongoose');

const bookNamesSchema = new mongoose.Schema({
bookName : { type:  String, description: "Required Field", required: true },
bookAuthor : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('bookNames', bookNamesSchema);