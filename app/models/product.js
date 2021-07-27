const ProductFile = require('../utils/file-handler');

class ProductModel {

    
    async flag(data) {
        const flag = ProductFile.writeProductData(data);
        if(flag)
            return true;
        else
            return false;
    }

    async checkProduct(data,id) {
        const findProduct = data.find(product => product.id === id)
        if(!findProduct) 
            return false;
    }

    async getProduct(id) {
        const productData = await ProductFile.readProductData();
        const findProduct = productData.find(product => product.id === id)
        if(findProduct) 
            return findProduct;
        else
            return false;
    }

    async listProducts() {
        const productsData = await ProductFile.readProductData();
        return productsData
    }

    async addProduct(data) {
        var createProduct = await ProductFile.readProductData();
        createProduct.push(data)
        return this.flag(createProduct);
    }

    async updateProduct(id,data) {
        var updateProduct = await ProductFile.readProductData();
        this.checkProduct(updateProduct,id);
        const filterProduct = updateProduct.filter(product => product.id !== id)
        filterProduct.push(data);
        return this.flag(filterProduct);
    }

    async deleteProduct(id) {
        var deleteProduct = await ProductFile.readProductData();
        this.checkProduct(deleteProduct,id);
        const filterProduct = deleteProduct.filter(product => product.id !== id)
        return this.flag(filterProduct);
    }
}

module.exports = new ProductModel();