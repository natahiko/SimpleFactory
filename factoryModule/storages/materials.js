class materialStorage {

  constructor(data) {
    this.storage = {}
    Object.keys(data).forEach(key => this.storage[key] = {
      amount: 0,
      type: data[key],
    })
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

  //used for debugging
  getAll() {
    return this.storage
  }

  get(name) {
    const amount = this.storage[name].amount
    if (amount <= 0 || amount === undefined)
      throw `No details for ${name} department`
    this.storage[name].amount = (amount - 1)
    return true
  }
}

module.exports = materialStorage