const url = 'https://www.affirmations.dev/';
var headers = {}
// The fetch() method returns a promise. If the promise returned is resolve, the function within the then() method is executed. That function contains the code for handling the data received from the API.
fetch(url, {
    method : "GET",
    mode: 'cors',
    headers: headers
})
    //make output data come back in json format
    .then((resp) => resp.json())
    //console.log the advice quote from the data object 
    .then(function(){
        console.log(res);
    })
    // The API you call using fetch() may be down or other errors may occur. If this happens, the reject promise will be returned. The catch method is used to handle reject. The code within catch() will be executed if an error occurs when calling the API of your choice.
    .catch(function(error) {
        console.log(error)
    });
// api calls
// https://www.affirmations.dev/ => return random affirmations
// https://api.fisenko.net/v1/authors/en?query="Steve Jobs"&limit=50&offset=0   => return Jobs's ID
// https://api.fisenko.net/v1/quotes/en/random/ => get random famous quotes
// https://api.fisenko.net/v1/authors/en/6153b7d49e8e5ae3eb230a5b/quotes?query=&limit=1&offset=0 => returns Job's famous quote object
