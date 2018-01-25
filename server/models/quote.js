var mongoose = require ('mongoose');

var QuoteSchema = new mongoose.Schema({
    quote: {type: String, required: [true, 'Cannot do quotes without a quote!'] },
    author: {type: String, required: [true, 'Listen somebody had to write this'] },
    likes: {type: Number},
})

mongoose.model ('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');