const mongoose = require('mongoose')

module.exports = async () => {
    await mongoose.connect(process.env.MDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    return mongoose
}