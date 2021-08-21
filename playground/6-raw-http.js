const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=f90b973d4666ad4d68e7938fb0babc6a&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})
request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()