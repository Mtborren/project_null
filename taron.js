var mysql = require('mysql');              //some variables
var express = require('express');
var app = express();
//to get to localhost:8080/
app.get('/', function(request, response){
  fetchData(response);
  console.log('Done. Displayed Data!!');
});
//to connect with the Database
var db = mysql.createConnection({
  host : 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user : 'vgq7ci3vh9s2fqle',
  password : 'i9amavg0kw9cpn4n',
  database : 'l5zds18qs08j9t8u'
})
//now we have to create connection with the database
db.connect(function(err){
  if(err){throw err;}
  console.log("Connected to the Database!!");
})
//------Functions
function executeQuery(sql , cb){
  db.query(sql, function(error, result, fields){
    if(error) {throw error;}
    cb(result);
  })
}
function fetchData(response){
  executeQuery("SELECT * from Project", function(result){
    console.log(result);
    response.write('<table><tr>');
    for(var column in result[0]){
      response.write('<td><label>'+ column + '<label><td>');
      response.write('</tr>');
    }
    for(var row in result){
      response.write('<tr>');
      for(var column in result[row]){
        response.write('<td><label>' + result[row][column] + '</label></td>');
      }
      response.write('</tr>');
    }
    response.end('</table>');
  })
}
//--------------------
app.listen(8080, function (){                   //to listen to port
  console.log('Listening to Port 8080');
})