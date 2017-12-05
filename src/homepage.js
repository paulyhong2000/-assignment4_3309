
function firstbutton()
{
  
}
  
function secondbutton()
{
  
}
function thirdbutton()
{
  fetch('https://se3309final-dhong45.c9users.io/src/homepage.html/store')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        return data.map(function(temp) {
            //any luck with getting stuff to work?
            //I fucking wish lol
            //does this work?
            //it should right
            //I used something like this for getting all the log in info for the webtech lab.
            // remeber to put it in the output textbox
          
        });
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
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