export default class FactoryDepartment {
  constructor(name, complect) {
    this.name = name
    this.kit = complect

    //common for all department
    this.workingTime = 100
    this.store = []
    this.working = false
  }

  addKit(kit){
    this.store.push(kit);
  }

  start(){
    this.working = true
    setInterval(() => {
      this.store.pop()
      console.log(`One ${this.name} created`)
    },100)
  }

  isWorking(){
    return this.working
  }

}