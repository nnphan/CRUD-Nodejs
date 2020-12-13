const app = require('./server')

//const PORT = 3000;

app.listen(app.get('port'), () => {
    console.log(`server on port`,app.get('port'))
})