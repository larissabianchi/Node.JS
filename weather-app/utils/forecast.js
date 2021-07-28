const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f90b973d4666ad4d68e7938fb0babc6a&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'
    request({url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }else if (response.body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, 
                'Today is ' + response.body.current.weather_descriptions + '. ' +
                'It is currently '+ response.body.current.temperature + ' degress out. ' +
                'It feels like '+ response.body.current.feelslike +' degress out.'
            )
        }
    })
}

module.exports = forecast