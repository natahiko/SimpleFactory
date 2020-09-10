Factory = require('./factoryModule/factory')

let factory = new Factory();
let kits1 = [{
  plastic: 10,
  glass: 90
}, {
  wood: 70,
  plastic: 5,
  glass: 25
}, {
  paper: 90,
  glue: 10
}, {
  clay: 70,
  sand: 10,
  quartz: 10,
  varnish: 10
}]
let kits2 = [{
  plastic: 10,
  glass: 30
}, {
  wood: 70,
  plastic: 5,
  glass: 25
}, {
  paper: 90,
  glue: 10
}, {
  clay: 70,
  sand: 10,
  quartz: 10,
  varnish: 10
}]
let kits3 = [{
  plastic: 10,
  glass: 90
}, {
  wood: 70,
  plastic: 5,
  glass: 25
}]
setTimeout(() => factory.appendKits(kits1), 100)
setTimeout(() => factory.appendKits(kits2), 200)
setTimeout(() => factory.appendKits(kits3), 100)
setTimeout(() => console.log(factory.showReadyProducts()), 1000)