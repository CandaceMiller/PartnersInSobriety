const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/Rehab',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db;