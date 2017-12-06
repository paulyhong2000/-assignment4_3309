/*global fetch*/
/*global URLSearchParams*/

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

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
    })
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        var i=0;
        var petS=0;
        var itemS=0;
        while(i<data.response.length){
            petS=petS+data.response[i].pPrice;
            itemS=itemS+data.response[i].iPrice
            i=i+1;
        }
        petS=round(petS,2);
        itemS=round(itemS,2);
        document.getElementById('answerbox3a').value=("$"+petS);
        document.getElementById('answerbox3b').value=("$"+itemS);
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
}



function fourthbutton(){
    console.log("fourthbutton");
    fetch(url+'/soldPets')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        console.log(data.response[0].PetID);
        var i=0;
        while(i<data.response.length){

             if(document.getElementById('textbox4').value==data.response[i].PetID){
                 document.getElementById('answerbox4').value="The Pet you have selected has been sold";
                 break;
             }
             else{
                 document.getElementById('answerbox4').value="The pet has not been sold";
             }
             i=i+1;
        }
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