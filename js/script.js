let pokemonList=[],pokemonRepositoy=function(){function a(){pokemonList.forEach(function(a){pokemonRepositoy.addListItem(a)})}function b(a){console.log(a),fetch(`https://pokeapi.co/api/v2/pokemon/${a.name}`).then(a=>a.json()).then(a=>{$(".modal-body").html(`Name: ${a.name} <br>
      Height: ${a.height} <br>
      Type: ${a.types.map(a=>a.type.name)} <br>
      <img src='${a.sprites.front_default}'>`)})}function c(){let a=emailInput.value;return a?-1===a.indexOf("@")?(e(emailInput,"You must enter a valid email address."),!1):(e(emailInput,null),!0):(e(emailInput,"Email is a required field."),!1)}function d(){let a=passwordInput.value;return a?a.length<8?(e(passwordInput,"The password needs to be at least 8 characters long."),!1):(e(passwordInput,null),!0):(e(passwordInput,"Password is a required field."),!1)}function e(e,c){let a=e.parentElement,d=a.querySelector(".error-message");if(d&&a.removeChild(d),c){let b=document.createElement("div");b.classList.add("error-message"),b.innerText=c,a.appendChild(b)}}return{add:pokemonList,getAll:a,addListItem:function(c){console.log(c);let e=document.querySelector(".pokemon-list"),d=document.createElement("li"),a=document.createElement("button");a.innerText=c.name,a.classList.add("btn"),a.classList.add("btn-primary"),a.classList.add("button-class"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#exampleModal"),a.onclick=()=>{b(c)},d.appendChild(a),e.appendChild(d)},loadList:function(b){return fetch(b).then(function(a){return a.json()}).then(function(b){b.results.forEach(function(a){var b;b={name:a.name,detailsUrl:a.url},pokemonList.push(b)}),a()})},showdetails:b,main:function(){pokemonRepositoy.loadList("https://pokeapi.co/api/v2/pokemon/")},validateEmail:c,validatePassword:d,showErrorMessage:e,validateForm:function(){let a=c(),b=d();return a&&b}}}();pokemonRepositoy.main()