const url = "https://se3309final-dhong45.c9users.io:8081/api";
function firstbutton()
{
  
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