const express = require('express')
const { MongoClient } = require('mongodb');
const config = require('./config/dev');
const app = express()

// MongoDBの接続URI
const uri = config.DB_URL;  // ローカルのMongoDBの場合、Atlasを使う場合は専用のURIを使用

// クライアントを作成
const client = new MongoClient(uri);

async function run() {
    try {
        // MongoDBに接続
        await client.connect();
        console.log("MongoDBに接続されました");

        app.get('/products', function(req, res){
            res.json({'success': true})
        })

        const PORT = process.env.PORT || '3001'

        app.listen(PORT, function(){
            console.log('I am running')
        })

    } finally {
        // クライアントを閉じる
        await client.close();
    }
}

run().catch(console.dir);

