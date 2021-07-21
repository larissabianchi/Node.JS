const request = require('postman-request')
const color = require('chalk')

const weatherURL = 'http://api.weatherstack.com/current?access_key=f90b973d4666ad4d68e7938fb0babc6a&query=37.8267,-122.4233&units=f'

request({url: weatherURL, json: true},(error, response) => {
    console.log(color.blue.bold('Today is '+response.body.current.weather_descriptions))
    console.log('It is currently '+ response.body.current.temperature +' degress out.')
    console.log('It feels like '+ response.body.current.feelslike +' degress out.')
})

const LocationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGFyaXNzYWJpYW5jaGkiLCJhIjoiY2tyZTNieXRoNGVjMDJzcnhoaW44enE5ZyJ9._uuTjrp6AXueJSiAXfS97A&limit=1'

request({url: LocationURL, json: true},(error, response) => {
    console.log(color.magenta.bold('Latitude: ')+ response.body.features[0].center[1])
    console.log(color.magenta.bold('Longitude: ')+ response.body.features[0].center[0])
})