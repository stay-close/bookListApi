const { model, Schema } = require('mongoose');


const bookListSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})


const bookListModel = model('bookList', bookListSchema)

module.exports = bookListModel;