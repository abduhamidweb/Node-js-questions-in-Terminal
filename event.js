// Event handlers for the current state of the modal window.
const fs = require('fs')
const [, , ...datas] = process.argv
console.log(datas)
const EventEmitter = require('events')
const event = new EventEmitter()
event.on('Xodim', (...data) => {
  console.log('Xodeim')
  console.log(data)
})
event.addListener('Xodim2', (...data) => {
  console.log('Xodim 2')
  console.log(data)
})
event.addListener('Fodbolchi', (...data) => {
  console.log('Fodbolchi')
  console.log(data)
})
let path = datas[0]
datas.shift()
event.emit(path, ...datas)
