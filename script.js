// script.js

var ul = document.getElementById("poke");

async function load() {
  var url = "https://pokeapi.co/api/v2/pokemon/25"; // Pikachu tem o ID 25

  try {
    var response = await fetch(url);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
      var dex = await response.json();
      showPoke(dex);
    } else {
      alert("Erro ao Carregar");
    }
  } catch (error) {
    console.error("Erro durante a requisição:", error);
  }
}

function showPoke(dex) {
  var pokemon = dex;
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  li.innerHTML = pokemon.name;
  li.appendChild(img);
  ul.appendChild(li);
}
