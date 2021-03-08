const { Schema, model } = require('mongoose')

const UserBody = new Schema({
    UserID: {
        type: Number,
        required: true
    },

    ServerID: {
        type: Number,
        required: true
    },

    Weapon_Pistol: {
        type: String,
        required: false
    }
})

module.exports = model('User', UserBody)