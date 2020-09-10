const FactoryDepartment = require('./department')
const MaterialsStore = require('./storages/materials')
const DefectStore = require('./storages/defect')
const ProductsStore = require('./storages/readyProducts')

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
      this.departments[key] = new FactoryDepartment(key, value, this.materialStore, this.readyStore)
      this.departments[key].start()
    }

    console.log('Factory created')
  }

  appendKits(kits) {
    kits.forEach(kit => this.__appendKit(kit))
    console.log('Kits appended')

  }

  __appendKit(kit) {
    const departmentName = this.materialStore.add(kit)
    if (departmentName === undefined)
      this.defectStore.add(kit)

  }

  showReadyProducts() {
    console.log(this.readyStore.getAll())
  }
}

module.exports = Factory