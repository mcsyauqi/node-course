const request = require('request')

// const url = 'https://api.darksky.net/forecast/17ae17408409e68c79f65c4360ca5d53/37.8267,-122.4233'

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// Geocodeing
// Input Location and get Latitude & Longitude

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/jakarta.json?access_token=pk.eyJ1IjoibWNzeWF1cWkiLCJhIjoiY2p1ajdwNmEzMWlwaTN5cGtuNGp4d3B6ZyJ9.wBIJ6cqdaaaqy6FkTiuq3g&limit=1'

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        console.log("Longitude: " + response.body.features[0].center[0] + "\nLatitude: " + response.body.features[0].center[1])
    }
})