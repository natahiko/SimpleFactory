class FactoryDepartment {

  constructor(name, kit, materialStore, readyStore) {
    this.name = name
    this.kit = kit
    this.materialStore = materialStore
    this.readyStore = readyStore

    //common for all department
    this.workingTime = 100

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
        this.materialStore.add(this.kit)
        //restart in case of exseption
        clearInterval(workInterval)
        this.start()
        console.log('EXCEPTION')
      }
    }, this.workingTime)
  }

  create(materials) {
    if (Math.random() < 0.05)
      throw `Internal error`

    this.readyStore.add(this.name)
    console.log(`One ${this.name} created`)
  }
}

module.exports = FactoryDepartment