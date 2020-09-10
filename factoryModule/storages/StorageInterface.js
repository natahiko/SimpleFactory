class Storage {
  constructor() {
    if (!!Storage.instance) {
      return Storage.instance
    }
    Storage.instance = this

    this.storage = {}
  }

  add(kit);

  //used for debugging
  getAll() {
    return this.storage
  }
}


module.exports = Storage