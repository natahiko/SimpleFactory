class defectStorage {

  constructor() {
    this.storage = []
  }

  add(kit) {
    this.storage.push(kit)
  }

  //used for debugging
  getAll() {
    return this.storage
  }
}

module.exports = defectStorage