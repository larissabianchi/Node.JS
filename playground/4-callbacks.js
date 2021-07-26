setTimeout(() =>{
    console.log('Two seconds are up!')
}, 2000)

const names = ['Larissa', 'Giulio', 'Rubens', 'Cida']
const shortName = names.filter((name) =>{
    return name.length >= 7
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data) 
    }, 2000)
}

geocode('Braganca', (data) => {
    console.log(data)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) 
})