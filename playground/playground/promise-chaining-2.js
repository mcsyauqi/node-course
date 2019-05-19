require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cd5989fbdd20e2c14fe9618').then((task) => {
//     console.log(task)
//     return Task.countDocuments({
//         completed: true
//     }).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const countIncomplete = await Task.countDocuments({
        completed: false
    })
    return countIncomplete
}

deleteTaskAndCount('5cd56f0ee9fae8399cb0766f').then((countIncomplete) => {
    console.log(countIncomplete)
}).catch((e) => {
    console.log(e)
})