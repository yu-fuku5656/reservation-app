const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const {FakeDb} = require('./fake-db');


// MongoDBの接続URI
const uri = config.DB_URL;  

// Mongoose接続
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDBに接続されました');
        const fakeDb = new FakeDb();
        fakeDb.seeDb();

        const app = express();

        app.get('/products', function (req, res) {
            res.json({ 'success': true });
        });

        const PORT = process.env.PORT || '3001';

        app.listen(PORT, function () {
            console.log('I am running');
        });
    })
    .catch(err => {
        console.error('MongoDB接続エラー:', err);
    });

