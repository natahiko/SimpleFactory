const Storage = require('./StorageInterface')

class MaterialsStorage extends Storage {

  constructor(data) {
    super()
    Object.keys(data).forEach(key => this.storage[key] = {
      amount: 0,
      type: data[key],
    })
  }

  hasMaterials(name) {
    return this.storage[name].amount > 0
  }

  //  check kit for department type
  //  if department finded return departnment name (key)
  //  else return undefined
  add(kit) {
    const departments = Object.keys(this.storage)
    for (let i = 0; i < departments.length; i++) {
      const department = this.storage[departments[i]]
      if (this.__compare(department.type, kit)) {
        this.storage[departments[i]].amount += 1
        return departments[i]
      }
    }
    return undefined
  }

  __compare(kit1, kit2) {
    const keys = Object.keys(kit1)
    for (let i = 0; i < keys.length; i++) {

      if (kit1[keys[i]] !== kit2[keys[i]]) {
        return false
      }
    }
    return true
  }

  get(name) {
    const amount = this.storage[name].amount
    if (amount === undefined)
      throw `No details with ${name} type`
    if (amount <= 0)
      return false
    this.storage[name].amount = (amount - 1)
    return this.storage[name].type
  }
}

module.exports = MaterialsStorage