require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5cd6326fddcf99286caa9eea', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 1
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = User.countDocuments({
        age
    })
    return count
}

updateAgeAndCount('5cd580dc3e40544818802f07', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})