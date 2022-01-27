
let pokemonList = [];


//forEach function

let pokemonRepositoy = (function(){
                                             
   function add (pokemon){
      pokemonList.push(pokemon);
    };

   function getAll() {
      pokemonList.forEach(function (pokemon){
          pokemonRepositoy.addListItem(pokemon);
      });
    };

    function addListItem(pokemon){
      console.log(pokemon)
      let pokemonList_ = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.onclick = (()=>{
      showdetails(pokemon)
      })
      listpokemon.appendChild(button);
      pokemonList_.appendChild(listpokemon);

    }

    function showdetails(pokemon){
      alert(`Name: ${pokemon.name} \n
      Height: ${pokemon.height}
      Type: ${pokemon.types}`)
    }
    

    function loadList(apiUrl) {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
       // console.log(json)
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url

          }
          add(pokemon)
        })
        getAll()

      })

    }
 
    function main() {
      pokemonRepositoy.loadList("https://pokeapi.co/api/v2/pokemon/");
    }
      //function return add a return for each functions
    return {
        add: pokemonList,
        getAll: getAll, 
        addListItem: addListItem,
        loadList: loadList, 
        showdetails: showdetails,
        main: main
    };


  })();

  pokemonRepositoy.main();

  


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
