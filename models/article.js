const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Article = new Schema({
    _id: {
        type : Schema.Types.ObjectId,
         required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    }
});

export default Article;