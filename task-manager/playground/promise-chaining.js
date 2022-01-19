require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('61e6bfbc2ad3b42fd85d4ad6', { age:21 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 0})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61e6bfbc2ad3b42fd85d4ad6', 5).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})