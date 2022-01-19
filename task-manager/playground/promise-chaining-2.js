require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61e6f07336016030f054952d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('61e5b6d9aaeb5a245c3ab69c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})