const { Schema, model } = require('mongoose')

const UserBody = new Schema({
    UserID: {
        type: Number,
        required: true
    },

    ServerID: {
        type: Number,
        required: true
    }
})

module.exports = model('User', UserBody)
