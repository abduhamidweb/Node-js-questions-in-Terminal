const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})





// let question = [
//   'Isminigiz nima ?',
//   'Yoshingiz nechchida ?',
//   'Kasbingiz nima ?',
//   'Adresingiz qayerda ?',
// ]
// function savol(arg) {
//   return question[arg]
// }
// let i = 0;
// rl.on('line', () => {
//     rl.setPrompt(savol(i++))
//     rl.prompt();
// })

// rl.setPrompt('Isminigiz nima ?')
// rl.prompt()

// rl.question('What is your name? ', (name) => {
//     console.log(`Hello, ${name}!`)
//     rl.close()
// });

// const fs = require('fs');
// const path = require('path')
// const pathToB = path.join(__dirname, 'a')
// function deleteFolderRecursive(folderPath) {
//   if (fs.existsSync(folderPath)) {
//     fs.readdirSync(folderPath).forEach((file) => {
//       const curPath = path.join(folderPath, file)
//       if (fs.lstatSync(curPath).isDirectory()) {
//         deleteFolderRecursive(curPath)
//       } else {
//         fs.unlinkSync(curPath)
//       }
//     })
//     fs.rmdirSync(folderPath)
//   }
// }

// deleteFolderRecursive(pathToB);
// const pathToB = path.join(__dirname, 'a')
// try {
//   fs.rmdirSync(pathToB)
//   console.log('Directory was successfully deleted.')
// } catch (err) {
//   console.error(err)
// }
