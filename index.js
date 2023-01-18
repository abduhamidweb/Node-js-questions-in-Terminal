// const fs = require('fs')
// const [, , ...datas] = process.argv
// if (datas.length === 5) {
//   console.log('Malumot mos emas')
//   process.exit()
// }
// fs.appendFileSync(datas[0] + '.json', '')
// const data = fs.readFileSync(datas[0] + '.json', 'utf-8') || '[]'
// const arr = JSON.parse(data)
// let obj = {
//   name: datas[1],
//   age: datas[2],
//   gender: datas[3],
//   nation: datas[4],
// }
// for (let i of arr) {
//   if (
//     obj.name === i.name &&
//     obj.age === i.age &&
//     obj.nation === i.nation &&
//     obj.gender === i.gender
//   ) {
//     console.log('Bu ' + datas[0] + ' mavjud')
//     process.exit()
//   }
// }
// arr.push(obj)
// fs.writeFileSync(datas[0] + '.json', JSON.stringify(arr, null, 4))

// console.log(datas[0] + " qo'shildi");
