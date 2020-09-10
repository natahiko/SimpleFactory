const Storage = require('./IStorage')

class DefectStorage extends Storage {

  constructor() {
    if (!!DefectStorage.instance) {
      return DefectStorage.instance
    }
    super()
    DefectStorage.instance = this

    this.storage.defects = []
    return this
  }

  add(kit) {
    this.storage.defects.push(kit)
  }

}

module.exports = DefectStorage