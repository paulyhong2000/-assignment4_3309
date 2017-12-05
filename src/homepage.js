var mysql = require('mysql');


var con = mysql.createConnection({
  host: "0.0.0.0",
  user: "dhong45",
  password: "",
  database:"pets3309"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


function firstbutton()
{
  // var sql;
  // if (textboxvalue-dfklsjlfds)
  // {
  //   sql= require('./sql/whatever.sql');
  // }
  // if else(text)
  // con.connect(function(err) {
  // if (err) throw err;
  // console.log("Connected!");
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Result: " + result);
  // });
};
  
function secondbutton()
{
  
}
function thirdbutton()
{
  
}
function fourthbutton()
{
  
}
function fifthbutton()
{
  
}
function exitbutton()
{
  window.close();
}