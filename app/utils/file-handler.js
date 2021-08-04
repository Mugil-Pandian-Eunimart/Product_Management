const fs = require('fs');

class ProductFile {
    async readProductData () {
        const data = fs.readFileSync('/home/ec2-user/Product_Management/app/utils/products.json');
        return JSON.parse(data);
    }

    async writeProductData (data) {
        const jsonData = JSON.stringify(data);
        // console.log(jsonData);
        fs.writeFileSync('/home/ec2-user/Product_Management/app/utils/products.json',jsonData)
    }
}

module.exports = new ProductFile();
