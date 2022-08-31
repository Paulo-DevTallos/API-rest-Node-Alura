const mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect('mongodb://paulosergio:paulo.tallos123@somngd01.cloud.dns.internal:27017,somngd02.cloud.dns.internal:27017,somngd03.cloud.dns.internal:27017/paulosergio?authMechanism=DEFAULT&replicaSet=rs0&readPreference=secondaryPreferred&authSource=admin')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    dbConnect
}
