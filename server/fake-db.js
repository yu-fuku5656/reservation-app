const Product = require('./model/product')

class FakeDb{

    constructor(){
        this.products = [
            {
                converImage: '.\assets\img\phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章',
                headingtext3: 'あいうえお'
              },
              {
                converImage: '\assets\img\img.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章',
                headingtext3: 'あいうえお'
              },
              {
                converImage: '\assets\img\img.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章',
                headingtext3: 'あいうえお'
              },
              {
                converImage: '\assets\img\img.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章',
                headingtext3: 'あいうえお'
              }
            ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = {FakeDb};