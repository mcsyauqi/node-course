const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// // Javascript object to JSON
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //JSON to Javascript object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataJSON = fs.readFileSync('1-json.json').toString()
const user = JSON.parse(dataJSON)

user.name = 'Ahmadi'
user.age = 25

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)