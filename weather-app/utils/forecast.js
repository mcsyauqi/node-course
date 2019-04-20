const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/17ae17408409e68c79f65c4360ca5d53/' + latitude + ',' + longitude

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect!', undefined)
        } else if (response.body.error) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast