const Storage = require('./StorageInterface')

class ProductsStorage extends Storage {

  constructor(products) {
    super()
    products.forEach(product => this.storage[product] = 0)
  }

  add(product) {
    this.storage[product] += 1
  }

  get(product) {
    return this.storage[product]
  }
}

module.exports = ProductsStorage