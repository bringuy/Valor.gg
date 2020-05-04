const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(require('./config.json').MONGODB, {
    useNewUrlParser: true
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
}) 

module.exports = mongoose