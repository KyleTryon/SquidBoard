const config = require('../config/config.js')
const fetch = require('node-fetch')

const safeURL = `http://api.openweathermap.org/data/2.5/weather?lat=${config.weather.location.lat}&lon=${config.weather.location.long}&APPID=${config.weather.openWeatherKey}`



function convertTemp(temp, unit) {
    switch(unit) {
        case 'c':
            return temp - 273.15
        case 'f':
            return (temp * (9/5)) - 459.67
        default:
            return temp
    }
}

module.exports = {
    async getWeather () {
        const result = await fetch(safeURL)
        const body = await result.json()
        console.log('fetched weather')
        return body
        
    },

    async getTemp (unit) {
        const weather = await this.getWeather();
        const temp =  weather.main.temp
        const converted = convertTemp(temp, unit)
        const rounded = (Math.round(10 * converted)/10).toFixed(1)
        console.log(rounded, unit)
    }
}    