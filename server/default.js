import { products } from './constants/products.js';
import Product from './model/productSchema.js';

const DefaultData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('products imported successfully');
    } catch (err) {
        console.log('err:-', err.message);
    }

}

export default DefaultData;