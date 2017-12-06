/*global fetch*/
/*global URLSearchParams*/

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function removeChild() {
    while ( document.getElementById('list').firstChild ) {
      document.getElementById('list').removeChild( document.getElementById('list').firstChild );
    }
}

const url = "https://finaldatabase-dhong45.c9users.io:8081/api";
function firstbutton()
{
    removeChild();
    var payload = {className: document.getElementById("textbox1a").value, price: parseInt(document.getElementById("textbox1b").value)};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/change', {
    	method: 'POST', 
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    })
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        var i=0;
        var line="";
        
        line=("pName    PetID    price    className");
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(line));
        ul.appendChild(li);
        
        while(i<data.response.length){
            line=(data.response[i].pName+"  "+data.response[i].PetID+"  "+data.response[i].price+"  "+data.response[i].className);
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(line));
            ul.appendChild(li);
            i=i+1;
        }
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
}
  
function secondbutton()
{
    removeChild();
    var payload = {EID: document.getElementById("textbox2").value};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/remove', {
    	method: 'POST',
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    })
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        var i=0;
        var line="";
        
        line=("EID    Ename");
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(line));
        ul.appendChild(li);
        
        while(i<data.response.length){
            line=(data.response[i].EID+"  "+data.response[i].Ename);
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(line));
            ul.appendChild(li);
            i=i+1;
        }
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
}
function thirdbutton()
{
    removeChild();
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
            itemS=itemS+data.response[i].iPrice;
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
    removeChild();
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
                 document.getElementById('answerbox4').value="The pet has not been sold, or does not exist";
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
    removeChild();
    var payload = {className: document.getElementById("textbox5x").value, pName: document.getElementById("textbox5a").value, age: parseInt(document.getElementById("textbox5b").value), price: parseInt(document.getElementById("textbox5c").value), storeID: parseInt(document.getElementById("textbox5d").value), spayedNeutered: parseInt(document.getElementById("textbox5e").value)};
    var enco = new URLSearchParams(payload);
    
    window.fetch(url+'/addpets', {
    	method: 'POST', 
    	header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    	body: enco,
    })
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        var i=0;
        var line="";
        
        line=("className    pName    age    price    storeID    spayedNeutered");
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(line));
        ul.appendChild(li);
        
        while(i<data.response.length){
            line=(data.response[i].className+"  "+data.response[i].pName+"  "+data.response[i].age+"  "+data.response[i].price+"  "+data.response[i].storeID+"  "+data.response[i].spayedNeutered);
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(line));
            ul.appendChild(li);
            i=i+1;
        }
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
  
}
function exitbutton()
{
    removeChild();
  window.close();
}

function isNumberKey(txt, evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) {
        //Check if the text already contains the . character
        if (txt.value.indexOf('.') === -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (charCode > 31
             && (charCode < 48 || charCode > 57))
            return false;
    }
    return true;
}