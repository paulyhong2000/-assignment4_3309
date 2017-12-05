var mysql = require('mysql');

var express = require('express'); // call express
var app = express();                //defining our app using express
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setting the port to 8081
var port =  8081;


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


var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


//testing route, GET at http://localhost:8080/api
router.get('/', function(req, res) 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ message: 'hooray! welcome to our api!' });   
});




router.get('/stores', function(req, res, next) {
	 con.query('SELECT * from stores', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"response": results}));
	});
});

router.post('/change', function(req,res,next)
{
    let className = req.body.className;
    let  price = req.body.price;
    
    con.query(
        {sql: 'UPDATE pet SET price= ? where className=?'},
        [price, className],
        function(error, results, fields) {
		if (error) throw error;
// 		con.query(
// 		    {sql: 'Select * From pet where className =?'},
// 		    [className],
// 		    function(error, results, fields) {
// 		        if (error) throw error;
// 		        res.send(JSON.stringify(results));
// 		    });
// 		con.query('select*from pet where className="'+className+'"', function(error, results, fields){
// 		    if (error) throw error;
// 		    res.send(JSON.stringify({"response": results}));
// 		})
	});
	con.query(
		    {sql: 'Select pName,PetID, price From pet where className =?'},
		    [className],
		    function(error, results, fields) {
		        if (error) throw error;
		        res.send(JSON.stringify(results));
		    });
//	res.send(JSON.stringify("fine"));
});

router.delete('/remove', function(req,res,next)
{
  let petID = req.body.petID;
  con.query('DELETE FROM pet WHERE petID ='+petID)
});

    
    
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);






// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);