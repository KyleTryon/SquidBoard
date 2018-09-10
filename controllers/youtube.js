const config = require('../config/config.js')
const fetch = require('node-fetch')

const safeURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${config.social.youtube.channelID}&fields=items/statistics/subscriberCount&key=${config.social.youtube.API_KEY}`
module.exports = {
    async getSubscribers () {
        let response = await fetch(safeURL)
        let data = await response.json()
        return data.items[0].statistics.subscriberCount
    }
}