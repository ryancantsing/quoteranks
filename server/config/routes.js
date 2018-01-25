var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
    app.get('/show', (req, res) => {
        console.log("GET checkpoint routes")
        quotes.show(req, res)
    })
    app.get('/view/:id', (req, res) => {
        quotes.view(req, res)
    })
    app.post('/create', (req, res)=> {
        console.log("POST checkpoint routes")
        quotes.create(req, res)
    })
    app.patch('/patch/:id', (req, res) => {
        console.log('PATCH route checkpoint')
        quotes.update(req, res)
    })
    app.delete('/delete/:id', (req, res) => {
        console.log('DELETE route checkpoint')
        quotes.delete(req, res)
    })
}