const ProductFile = require('../utils/file-handler');

class ProductModel {
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
        const flag = ProductFile.writeProductData(createProduct);
        if(flag)
            return true;
        else
            return false;
    }

    async updateProduct(id,data) {
        var updateProduct = await ProductFile.readProductData();
        const findProduct = updateProduct.find(product => product.id === id)
        if(!findProduct)
            return false;
        const filterProduct = updateProduct.filter(product => product.id !== id)
        filterProduct.push(data);
        const flag = ProductFile.writeProductData(filterProduct);
        if(flag)
            return true;
        else
            return false;
    }

    async deleteProduct(id) {
        var deleteProduct = await ProductFile.readProductData();
        const findProduct = deleteProduct.find(product => product.id === id)
        if(!findProduct)
            return false;
        const filterProduct = deleteProduct.filter(product => product.id !== id)
        const flag = ProductFile.writeProductData(filterProduct);
        if(flag)
            return true;
        else
            return false;
    }
}

module.exports = new ProductModel();