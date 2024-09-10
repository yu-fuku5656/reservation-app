const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const {FakeDb} = require('./fake-db');

const productRoutes = require('./routes/Products')


// MongoDBの接続URI
const uri = config.DB_URL;  

// Mongoose接続
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDBに接続されました');
    const fakeDb = new FakeDb();
    fakeDb.initDb();
})
    .catch(err => {
        console.error('MongoDB接続エラー:', err);
});

const app = express();

app.use('/api/v1/products', productRoutes)


const PORT = process.env.PORT || '3001';

app.listen(PORT, function () {
    console.log('I am running');
});


