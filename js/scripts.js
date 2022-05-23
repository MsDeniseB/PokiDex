
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
      console.log(pokemon)
     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
     .then(res=>res.json())
     .then(pokemon=>{
      alert(`Name: ${pokemon.name} \n
      Height: ${pokemon.height}
      Type: ${pokemon.types.map(x=>x.type.name)}`)
     })
     
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
 
    function validateEmail() {
        let value = emailInput.value;
      
        if (!value) {
          showErrorMessage(emailInput, 'Email is a required field.');
          return false;
        }
      
        if (value.indexOf('@') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid email address.');
          return false;
        }
      
        showErrorMessage(emailInput, null);
        return true;
      }
    
      function validatePassword() {
        let value = passwordInput.value;
      
        if (!value) {
          showErrorMessage(passwordInput, 'Password is a required field.');
          return false;
        }
      
        if (value.length < 8) {
          showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
          return false;
        }
      
        showErrorMessage(passwordInput, null);
        return true;
      }

    function showErrorMessage(input, message) {
      let container = input.parentElement;
      //Removes an existing error
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
      // Now add the error, if the message is not empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }


   function validateForm() {
      let isValidEmail = validateEmail();
      let isValidPassword = validatePassword();
      return isValidEmail && isValidPassword;
    }
        //eror here 4 sum reson
    /* 
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });
    
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword); */

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
        main: main,
        validateEmail: validateEmail,
        validatePassword: validatePassword,
        showErrorMessage: showErrorMessage,
        validateForm: validateForm
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
