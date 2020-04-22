var express = require('express');
 var mysql = require('mysql');
var app = express();
 var connection = mysql.createConnection(
     {
        //  properties
        host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vgq7ci3vh9s2fqle',
        password: 'i9amavg0kw9cpn4n',
        database: 'l5zds18qs08j9t8u'}
 );
connection.connect(function(error){
    if (!!error) {
        console.log('Error');
    } else {
        console.log ('connected');
    }
});
app.get('/', function(req, resp) {
    connection.query('SELECT * FROM Project', function(error, rows, fields) {
        if (!!error) {
            console.log('Error in query');
        } else {
            console.log ('Query successful!');
            // parse with rows/fields
        }
    })
})
app.listen(3306)