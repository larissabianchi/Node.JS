const request = require('postman-request')
const color = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=f90b973d4666ad4d68e7938fb0babc6a&query=37.8267,-122.4233&units=f'

request({url: url, json: true},(error, response) => {
    //console.log(response.body.current)
    const temperature = response.body.current.temperature
    const feelsLike = response.body.current.feelslike
    const weatherDesc = response.body.current.weather_descriptions

    console.log(color.blue.bold('Today is '+weatherDesc))
    console.log('It is currently '+ temperature +' degress out.')
    console.log('It feels like '+ feelsLike +' degress out.')
})