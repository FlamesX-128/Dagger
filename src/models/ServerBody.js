const { Schema, model } = require('mongoose')

const ServerBody = new Schema({
    ServerID: {
        Type: Number,
        required: true
    }
})

module.exports = model('Server', ServerBody)