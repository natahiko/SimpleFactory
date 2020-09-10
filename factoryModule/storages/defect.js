const Storage = require('./StorageInterface')

class DefectStorage extends Storage {

  constructor() {
    super()
    this.storage.defects = []
  }

  add(kit) {
    this.storage.defects.push(kit)
  }

}

module.exports = DefectStorage