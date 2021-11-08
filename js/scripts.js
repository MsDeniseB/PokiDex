const pokemonList = [
    { name: 'eevee', height: 0.7, type: 'normal'},
    { name: 'weedle', height: 1.7, type: 'bug'},
    { name: 'ekans', height: 1, type: 'poison'}
  ];

  //forEach function

  pokemonList.forEach(function(pokemon) {
    if(pokemon.height <= 1) {
      document.write("name" + pokemon.name + " ("+pokemon.height+")")
      document.write("<br>")
    }
    else{
      document.write("name" + pokemon.name + " ("+pokemon.height+")" + "Wow that's big!")
      document.write("<br>")
    }
    })

  let pokemonRepositoy = (function(){
    let pokemonList = [
      { name: 'eevee', height: 0.7, type: 'normal'},
      { name: 'weedle', height: 1.7, type: 'bug'},
      { name: 'ekans', height: 1, type: 'poison'}
    ];
   
    return {
      add : function (pokemon){
        pokemonList.push(pokemon);
        },
   
       function getAll() {
          return pokemonList;
        }
     
        return {
          add: add,
          getAll: getAll 
        };
      })();

 

   

  



/*
const formLabels = ["fullname", "username", "password", "address", "city"];

const doc = document.getElementById("root");
doc.innerHTML+= "<form action='www.google.com' method='get'>"
formLabels.forEach(function(label, index){
doc.innerHTML+= label+": <input type='text'>"+"<br>";
});
doc.innerHTML+= "<button>Submit</button>"
doc.innerHTML+= "</form>"
*/

