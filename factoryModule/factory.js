const FactoryDepartment = require('./department')
const materialStore = require('./storages/materials')
const defectStore = require('./storages/defect')
const productStore = require('./storages/readyProducts')

class Factory {

  data = require('./source/kits.json')

  constructor() {
    this.materialStore = new materialStore(this.data)
    this.defectStore = new defectStore()
    this.readyStore = new productStore(Object.keys(this.data))

    this.departments = {}
    for (const [key, value] of Object.entries(this.data)) {
      this.departments[key] = new FactoryDepartment(key, value, this.materialStore, this.readyStore)
    }

    console.log('Factory created')
  }

  appendKits(kits) {
    kits.forEach(kit => this.__appendKit(kit))
    console.log('Kits appended')
    console.log(this.materialStore.getAll())

  }

  __appendKit(kit) {
    const departmentName = this.materialStore.add(kit)
    console.log(departmentName)
    if (departmentName === undefined)
      this.defectStore.add(kit)
    else {
      this.departments[departmentName].checkForWorking()
    }
  }

}

module.exports = Factory