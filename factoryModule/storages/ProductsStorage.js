const Storage = require('./IStorage')

class ProductsStorage extends Storage {

  constructor(products) {
    if (!!ProductsStorage.instance) {
      return ProductsStorage.instance
    }
    super()
    ProductsStorage.instance = this

    products.forEach(product => this.storage[product] = 0)
    return this
  }

  add(product) {
    this.storage[product] += 1
  }

  get(product) {
    return this.storage[product]
  }
}

module.exports = ProductsStorage