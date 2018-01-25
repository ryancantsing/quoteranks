var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    show: function(req, res){
        console.log("GET checkpoint controller")
        Quote.find({}).sort('-likes').exec((err, quote) => {
            console.log(quote)
            if (err){
                res.json({ message: "Oh geez something's up", err})
            } else {
                res.json({ message: "Got 'em", quote })
            }
        })
    },
    view: function(req, res){
        Quote.findById({id : _id}, (err, quote) => {
            if (err){
                res.json({ message: "Error finding quote"}, err)
            } else {
                res.json({ message: "There's the quote!"}, quote)
            }
        })
    },
    create: function(req, res){
        console.log("POST checkpoint controller")
        var quote = new Quote({ quote: req.body.quote, author: req.body.author, likes: req.body.likes})//request parameters
        quote.save((err, quote) =>{
            if(err){
                res.json({message: "Something went wrong, bud", err })
            } else {
            res.json({message: "Successfully Added!", quote })
            }
        })
    },
    update: function(req, res){
        console.log(req.params.id)
        console.log("PATCH checkpoint controller")
        var quote = Quote.findById({ _id: req.params.id})
            quote.update({likes: req.body.likes}, (err, quote) => {
                if (err){
                    res.json({message: "Something went wrong, bud", err})
                }else {
                    res.json({ message: "Successfully Updated" })
                }
            }) 
        },
    
    delete: function(req, res){
        console.log(req.params.id)
        var quote = Quote.findById({ _id: req.params.id})

        quote.remove( (err) => {
            if (err){
                res.json({message: "Something went wrong, bud", err})
            } else{
                res.json({ message: "successfully deleted."})
        }
    })
}
}