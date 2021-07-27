const ProductModel = require('../../models/product');
const ProductFile = require('../../utils/file-handler');

class Product {
    
    async handleListProducts(res) {
        const data = await ProductModel.listProducts();
        return res.status(200).send(data);
    }
    
    async handleGetProduct(req,res) {
        const id = req.query.id;
        const data = await ProductModel.getProduct(id);
        if(data) 
            res.status(200).send(data);
        else
            res.status(400).send({error:true,message:'Product was not Found.'})
    }
    
    async handleAddProduct(req,res) {
        const data = req.body;
        const flag = await ProductModel.addProduct(data);
        if(flag) 
            res.status(200).send({error:false,message:'Product was Added Successfully.'})
        else
            res.status(400).send({error:true,message:'Product was not Added.'})
        
    }

    async handleUpdateProduct(req,res) {
        const id = req.query.id;
        const data = req.body;
        const flag = await ProductModel.updateProduct(id,data);
        if(flag) 
            res.status(200).send({error:false,message:'Product was Updated Successfully.'})
        else
            res.status(400).send({error:true,message:'Product was not Updated.'})
    }

    async handleDeleteProduct(req,res) {
        const id =req.query.id;
        const flag = await ProductModel.deleteProduct(id);
        if(flag) 
            res.status(200).send({error:false,message:'Product was Deleted Successfully.'})
        else
            res.status(400).send({error:true,message:'Product was not Deleted.'})
    }

}

module.exports = new Product();