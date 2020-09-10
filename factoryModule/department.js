const MaterialsStore = require('./storages/MaterialsStorage')
const ProductsStore = require('./storages/ProductsStorage')

class FactoryDepartment {

  constructor(name, kit, workingTime = 100) {
    this.name = name
    this.kit = kit
    this.materialStore = new MaterialsStore()
    this.readyStore = new ProductsStore()
    this.workingTime = workingTime

    console.log(`Department ${this.name} created`)
  }

  async start() {
    // console.log(`Department ${this.name} start working`)

    const workInterval = setInterval(() => {
      try {
        let materials = this.materialStore.get(this.name)
        if (materials)
          this.create(materials)
      } catch (e) {
        //return materials that we get
        this.materialStore.add(this.name)
        //restart in case of exception
        clearInterval(workInterval)
        this.start()
      }
    }, this.workingTime)
  }

  create(materials) {
    if (Math.random() < 0.05)
      throw `Internal error`

    this.readyStore.add(this.name)
    console.log(`One ${this.name} created`)
  }

  getKitType() {
    return this.kit
  }
}

module.exports = FactoryDepartment