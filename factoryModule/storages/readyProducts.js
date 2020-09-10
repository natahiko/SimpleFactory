class productStorage {

  constructor(products) {
    this.storage = {}
    products.forEach(product => this.storage[product] = 0)
  }

  add(product) {
    this.storage[product] += 1
  }

  //used for debugging
  getAll() {
    return this.storage
  }

  get(product) {
    return this.storage[product]
  }
}

module.exports = productStorage