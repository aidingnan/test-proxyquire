const proxyquire =  require('proxyquire')

const b = proxyquire('./b', { './a': {
  print() {
    console.log('I am B')
  }
}})

b()