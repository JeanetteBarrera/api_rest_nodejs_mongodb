const Product = require("../models/Product");

let controller = {
    create: async (req, res) => {
        
        const newProduct = new Product(req.body);

        try {
            
            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct);

        } catch (err) {
            
            res.status(500).json(err)
        }
    },
    updateProduct: async (req, res) => {
       
        try {

            const updateProduct  = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $set : req.body
                },
                {
                    new : true
                }
            );
            res.status(200).json(updateProduct);
            
        } catch (err) {
            
            res.status(500).json(err)
        }
    },
    deleteProduct: async (req, res) => {

        try {
            
            const product = await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Product has been deleted...")

        } catch (err) {
            
            res.status(500).json(err)
        }

    },
    findProduct: async (req, res) => {

        try {
            
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);

        } catch (err) {
            
            res.status(500).json(err)
        }
    },
    allProducts: async (req, res) => {
        const news = req.query.new;
        const category = req.query.category;

        try {

            let products;
            
            if(news) {

                products = await Product.find().sort({ createdAt : -1 });
            } else if(category) {

                products = await Product.find({
                    categories : {
                        $in : [category]
                    }
                })
            } else {

                products = await Product.find();
            }

            res.status(200).json(products)

        } catch (err) {
            
            res.status(500).json(err)
        }
    }   
}

module.exports = controller;