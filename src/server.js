const app = require('./app')

app.listen(8080, () => {
    console.log('Server open in http://localhost:8080/')
})

module.exports = app