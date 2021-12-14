const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (request, response) => {
    response.render('index', {
        title: 'Weather',
        developer: 'Larissa Bianchi'
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About',
        caption: 'Developer:',
        name: 'Larissa Cardoso Bianchi',
        city: 'Bragança Paulista - SP',
        birth: 'February 16th, 2001',
        developer: 'Larissa Bianchi'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help',
        caption: 'Contact us:',
        email: 'larissabianchi16@gmail.com',
        phone: '(11)4002-8922',
        developer: 'Larissa Bianchi'
    })
})

app.get('/weather', (request, response) => {
    response.send('<h1>Weather</h1>')
})

app.get('/help/*', (request, response) => {
    response.render('404', {
        title: 'Error 404',
        errorMessage: 'Help article not found :(',
        developer: 'Larissa Bianchi'
    })
})

app.get('*', (request, response) => {
    response.render('404', {
        title: 'Error 404',
        errorMessage: 'Page not found :(',
        developer: 'Larissa Bianchi'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})