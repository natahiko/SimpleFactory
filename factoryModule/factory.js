import FactoryDepartment from './department'

const kitsJSONFile = './kits.json'

export default class Factory {
  constructor() {
    let data
    fetch(kitsJSONFile)
      .then(response => response.json())
      .then(jsonResponse => data = jsonResponse)

    this.departments = {}
    for (const [key, value] of Object.entries(data)) {
      this.departments[value] = new FactoryDepartment(key, value)
    }

    this.defectStorage = []
  }

  appendKit(kits) {
    kits.forEach(kit => function () {
        const department = this.departments[kit]
        if (department == undefined)
          this.defectStorage.push(kit)
        else{
          department.addKit(kit)
          if (!department.isWorking())
            department.start()
        }
      },
    )
  }

}
