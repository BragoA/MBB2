const controllers = require('./controllers')

module.exports = function(app){
    app.get('/all', controllers.viewAll)
    app.get('/one/:customId', controllers.viewProduct)
    app.post('/one', controllers.createProduct)
    app.delete('/one/:id', controllers.deleteProduct)
    app.patch('/one/:id', controllers.reviewProduct)
}