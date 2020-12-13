const express =  require('express');
const path = require('path');


//init
const app = express();

// Settings
app.set('port',process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'));

//static file
app.use(express.static(path.join(__dirname,'public')));


// middleware
app.use(express.urlencoded({extended: false}));

//global variables

//routes
app.get('/',(req,res) => {
    res.send('helllo');
})



module.exports = app;