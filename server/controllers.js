const Product= require("./models")
module.exports = {
    viewAll : function(req, res) {
        Product.find({})
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    },
    createProduct : function(req, res){
        Product.create(req.body)
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    },
    reviewProduct : function(req,res){
        Product.findByIdAndUpdate(req.params.id, {$set : req.body}, {runValidators: true})
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    },
    viewProduct : function(req, res){
        Product.find({customId: req.params.customId})
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    },
    deleteProduct : function(req, res){
        Product.findByIdAndDelete(req.params.id)
            .then((data)=>res.json(data))
            .catch((err)=>res.json(err))
    }
}