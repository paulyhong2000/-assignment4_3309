/*global fetch*/
/*global URLSearchParams*/

const url = "https://se3309final-dhong45.c9users.io:8081/api";
function firstbutton()
{
    var payload = {className: document.getElementById("textbox1a").value, price: parseInt(document.getElementById("textbox1b").value)};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/change', {
    	method: 'POST', 
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    });
}
  
function secondbutton()
{
  
}
function thirdbutton()
{
    var myresult="Michael is the Master";
    window.fetch(url+'/stores')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        return data.map(function(temp) {
        });
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
    
    document .getElementById('output').Value=myresult;
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