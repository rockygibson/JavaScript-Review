//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, 
//movie, holiday. Have the values to those keys be your favorite thing in that category. 

  var favoriteThings = {
    band: 'Rise Against',
    food: 'Pizza',
    person: 'wife',
    book: 'As a man thinketh',
    movie: 'American Sniper',
    holiday: 'None',
  }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = 'Tundra',
  favoriteThings.brand = 'Volcom',

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  favoriteThings.food = 'Pizza',

//Now, alert your favorite person, then alert your favorite book.

  alert(favoriteThings.person);
  alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  for (key in user) {
    if(user[key]) {
      console.log("truthy");
    } else {
      delete user[key];
    }
  };

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user.name = 'Rocky Gibson',
  user.pwHash = 'bust',
  user.username = 'rockygibson',

//Now console.log your object and make sure it looks right.

  console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  var methodCollection ={};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  methodCollection.alertHello = function(){
    alert ('hello');
  }

  methodCollection.logHello = function(){
    console.log('hello');
  }
//Now call your alertHello and logHello methods. 

  methodCollection.alertHello();
  methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(string){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lookUp = {};
  string = string.toLowerCase();
  for(var i = 0; i < string.length; i++) {
    if(vowels.indexOf(string[i]) !== -1) {
      if(!lookUp[string[i]]) {
        lookUp[string[i]] = 0
      }
      lookUp[string[i]]++;
    }
  }
  return lookUp;
};

voweler("We are testing the voweler function thingy");

