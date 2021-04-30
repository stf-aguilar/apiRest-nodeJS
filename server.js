const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const routes = require('./routes');

app.set('port', process.env.PORT || 9000);
/*const dbOptions = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'abc123',
    database:'operations'
}

//middlewares ----------------------
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.json());
*/

//routes ---------------------------
app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.use('/api', routes);

//server running ---------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'));
})

