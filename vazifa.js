const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let date = new Date()
let sum = 0
let minusSum = 0
let answers = []
let reting = []
const question = ['2 + 2 = ', '3 + 3 = ', '4 + 4 = ', '5 + 5 = ']
function stringToNumberArray(arr) {
  return arr.map(function (element) {
    return isNaN(Number(element)) ? element : Number(element)
  })
}
function* gen() {
  for (let el of question) {
    yield el
  }
}
const generator = gen()

const [, , ...datas] = process.argv
if (datas.length != 2) {
  console.log('Malumot mos emas')
  process.exit()
}
fs.appendFileSync(datas[0] + '.json', '')
const data = fs.readFileSync(datas[0] + '.json', 'utf-8') || '[]'
const arr = JSON.parse(data)
let obj = {
  name: datas[1],
}
for (let i of arr) {
  if (obj.name === i.name) {
    console.log('Bu ' + datas[0] + ' bor')
    process.exit()
  }
}
rl.on('line', (data) => {
  answers[answers.length] = data
  let ansewer = generator.next().value
  if (!ansewer) {
    if (stringToNumberArray(answers)[1] == 4) {
      sum += 1
    } else {
      minusSum += 1
    }
    if (stringToNumberArray(answers)[2] == 6) {
      sum += 1
    } else {
      minusSum += 1
    }
    if (stringToNumberArray(answers)[3] == 8) {
      sum += 1
    } else {
      minusSum += 1
    }
    if (stringToNumberArray(answers)[4] == 10) {
      sum += 1
    } else {
      minusSum += 1
    }
    //   reting.push({ rights: sum, error: minusSum, date: date.toLocaleString() })
    //   console.log(reting);

    reting.push({
      rights: sum,
      error: minusSum,
      date: date.toLocaleString(),
    })
    obj.reting = reting
    arr.push(obj)
    fs.writeFileSync(datas[0] + '.json', JSON.stringify(arr, null, 4))
    return rl.close()
  }
  rl.setPrompt(ansewer)
  rl.prompt()
})
console.log(
  datas[0] +
    " qo'shildi savol javobni boshlash uchun bir marta enter tugmasini bosinig"
)
