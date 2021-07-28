const color = require('chalk')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]

if(!address){
    console.log(color.red.bold('Please, enter an address!')) 

}else{
    geocode(address, (error, data) => {
        if(error){
            return console.log(color.red.bold(error))
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(color.red.bold(error))
            }     
    
            console.log(color.magenta.bold(data.location))
            console.log(color.blue.bold(forecastData))
        })
    })
}