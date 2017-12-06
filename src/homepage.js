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
    var payload = {EID: document.getElementById("textbox2").value};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/remove', {
    	method: 'POST',
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    });
}
function thirdbutton()
{
    var payload = {storeID: document.getElementById("textbox3").value};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/revenue', {
    	method: 'POST', 
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    });
}



function fourthbutton(){
    console.log("fourthbutton");
    fetch(url+'/soldPets')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        return data.map(function(temp) {
            if(document.getElementById('textbox4').value==temp.PetID){
                document.getElementById('answerbox4').value="True";
            }
            else{
                document.getElementById('answerbox4').value="False";
            }
        });
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
}
function fifthbutton()
{
  
}
function exitbutton()
{
  window.close();
}