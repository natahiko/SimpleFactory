Factory = require('./factoryModule/factory')

let factory = new Factory()

setInterval(() => {
  let kits = [{
    plastic: 10,
    glass: 90,
  }, {
    wood: 70,
    plastic: 5,
    glass: 25,
  }, {
    paper: 90,
    glue: 10,
  }, {
    clay: 70,
    sand: 10,
    quartz: 10,
    varnish: 10,
  }]

  factory.appendKit(kits)
}, 100)