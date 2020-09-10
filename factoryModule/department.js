class FactoryDepartment {

  constructor(name, kit, materialStore, readyStore) {
    this.name = name
    this.kit = kit
    this.materialStore = materialStore
    this.readyStore = readyStore

    //common for all department
    this.workingTime = 100
    this.store = []
    this.working = false

    console.log(`Department ${this.name} created`)
  }

  async start() {
    this.working = true
    // console.log(`Department ${this.name} start working`)

    const interval = setInterval(() => {
      try {
        this.materialStore.get(this.name)

        console.log(`One ${this.name} created`)
        this.readyStore.add(this.name)
      } catch (e) {
        clearInterval(interval)
        this.working = false
        // console.log(`Department ${this.name} have no details`)
      }
    }, this.workingTime)
  }

  // if don't working should start
  checkForWorking() {
    if (!this.working)
      this.start()
  }

}

module.exports = FactoryDepartment