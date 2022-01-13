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
   function add (pokemon){
      pokemonList.push(pokemon);
    };

   function getAll() {
        return pokemonList;
    };
   
    return {
        add: add,
        getAll: getAll 
    };
    })();



/* form for name and info

const formLabels = ["fullname", "username", "password", "address", "city"];

const doc = document.getElementById("root");
doc.innerHTML+= "<form action='www.google.com' method='get'>"
formLabels.forEach(function(label, index){
doc.innerHTML+= label+": <input type='text'>"+"<br>";
});
doc.innerHTML+= "<button>Submit</button>"
doc.innerHTML+= "</form>"



  function add(pokemon) {
    if(
      typeof pokemon === "objecet" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
      ) {
      repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");



console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'eevee', height: 0.7, type: 'normal'});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(fuction (pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("buttton");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

});

*/

