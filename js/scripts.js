const pokemonList = [
  { name: 'eevee', height: 0.7, types: 'normal'},
  { name: 'weedle', height: 1.7, types: 'bug'},
  { name: 'ekans', height: 1, types: 'poison'}
];
 
//forEach function
 
  // functions
let pokemonRepositoy = (function(){
 
   function add (pokemon){
      pokemonList.push(pokemon);
    };
 
   function getAll() {
        return pokemonList;
    };
 
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      console.log(pokemonList)
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.onclick = (()=>{
      showdetails(pokemon)
      })
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
 
 
    function showdetails(pokemon){
      alert(`Name: ${pokemon.name} \n
      Height: ${pokemon.height}
      Type: ${pokemon.types}`)
    }
    };
      //function return add a return for each functions
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
    })();
 
    pokemonRepositoy.getAll().forEach(function (pokemon){
      pokemonRepositoy.addListItem(pokemon);
    });
 
 
 
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
 
 

