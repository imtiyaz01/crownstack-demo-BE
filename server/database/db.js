import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.ngebr.mongodb.net/E-COMMERCE?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('database connected');
    } catch (err) {
        console.log('err:', err.message);
    }
}

export default Connection;