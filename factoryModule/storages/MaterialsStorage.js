const Storage = require('./IStorage')

class MaterialsStorage extends Storage {

  constructor(data) {
    if (!!MaterialsStorage.instance) {
      return MaterialsStorage.instance
    }
    super()
    MaterialsStorage.instance = this

    Object.keys(data).forEach(key => this.storage[key] = {
      amount: 0,
      type: data[key],
    })
    return this
  }

  //  check kit for department type
  //  if department finded return departnment name (key)
  //  else return undefined
  add(type) {
    this.storage[type].amount += 1
  }

  get(name) {
    const amount = this.storage[name].amount
    if (!amount)
      throw `No details with ${name} type`
    if (amount <= 0)
      return false
    this.storage[name].amount = (amount - 1)
    return this.storage[name].type
  }
}

module.exports = MaterialsStorage