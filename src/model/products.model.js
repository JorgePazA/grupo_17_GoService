const fs = require("fs")
const path = require("path")
const { productsDB } = require("../data")

const newID = () => {
  let id = 0
  productsDB.forEach(p => p.id > id ? id = p.id : "")
  return id + 1
}

const writeProducts = () => {
  let dbJSON = JSON.stringify(productsDB, null, 4)
  let dbPath = path.resolve(__dirname, "../data/products.json")
  fs.writeFileSync(dbPath, dbJSON)
}

const model = {
  
    getProduct: function (id) {
      return productsDB.find(item => item.id === id) || null
    },
  
    addProduct: function (product, fileName) {
      let newProduct = {
        id: newID(),
        fullName: product.fullName,
        description: product.description,
        price: parseInt(product.price),
        category: product.category,
        image: fileName,
        experience: product.experience
      }
  
      productsDB.push(newProduct)
  
      writeProducts()
    }
}

module.exports = model