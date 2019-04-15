const request = require('request')

const url = 'https://api.darksky.net/forecast/17ae17408409e68c79f65c4360ca5d53/37.8267,-122.4233?units=si&lang=id'

request({
    url: url,
    json: true
}, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})