
function firstbutton()
{
  
}
  
function secondbutton()
{
  
}
function thirdbutton()
{
    var myresult="Michael is the Master";
  window.fetch('./api/store')
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