const FactoryDepartment = require('./department')
const MaterialsStore = require('./storages/MaterialsStorage')
const DefectStore = require('./storages/DefectStorage')
const ProductsStore = require('./storages/ProductsStorage')

class Factory {

  specializations = require('./source/kits.json')

  constructor() {
    if (!!Factory.instance) {
      return Factory.instance
    }
    Factory.instance = this

    this.materialStore = new MaterialsStore(this.specializations)
    this.defectStore = new DefectStore()
    this.readyStore = new ProductsStore(Object.keys(this.specializations))

    this.departments = {}
    for (const [key, value] of Object.entries(this.specializations)) {
      this.departments[key] = new FactoryDepartment(key, value)
      this.departments[key].start()
    }

    console.log('Factory created')
    return this
  }

  appendKit(kits) {
    kits.forEach(kit => {
      const type = this.__getType(kit)
      if (!type)
        this.defectStore.add(kit)
      else
        this.materialStore.add(type)
    })
    console.log('Kits appended')

  }

  __getType(kit) {
    //validate and return type
    const departments = Object.keys(this.departments)
    for (let i = 0; i < departments.length; i++) {
      const department = this.departments[departments[i]]
      if (this.__compare(department.getKitType(), kit)) {
        return departments[i]
      }
    }
    return null
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
  showReadyProducts() {
    console.log(this.readyStore.getAll())
  }
}

module.exports = Factory