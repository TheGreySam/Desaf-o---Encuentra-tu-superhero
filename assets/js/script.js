const formularioElement = $("#formulario");
const inputElement = $("#superhero-input");
const requestSection = document.getElementById("request-section");

console.log(formularioElement);

function renderSuperhero(superhero) {
  const imagen = document.getElementById("imagen")
  const nombre = document.querySelector("#nombre")
  const publicadopor = $("#publicadopor");
  const ocupacion = $("#ocupacion")
  const aparicion = $("#aparicion")
  const altura = $("#altura")
  const peso = $("#peso")
  const alianzas = $("#alianzas")

  imagen.setAttribute("src", superhero.image.url);
  nombre.innerHTML = `Nombre: ${superhero.name}`;
  publicadopor.html(superhero.biography.publisher);
  ocupacion.html(superhero.work.ocupation);
  aparicion.html(superhero.biography["first-appearance"]);
  altura.html(`${superhero.appearance.height[0]} - ${superhero.appearance.height[1]}`);
  peso.html(`${superhero.appearance.weight[0]} - ${superhero.appearance.weight[1]}`);
  alianzas.html(superhero.biography.aliases.join(" - "));
}

function renderSuperheroChart(superhero) {
  const options = {
    title: {
      text: "Gráfico del Superheroe",
    },
    data:[
      {
        type: "pie",
        dataPoints: [
          {label: "inteligencia",
          y: Number.parseInt(superhero.powerstats.intelligence),},
          {label: "Fuerza",
          y: Number.parseInt(superhero.powerstats.intelligence),},
          {label: "Velocidad",
          y: Number.parseInt(superhero.powerstats.intelligence),},
          {label: "Durabilidad",
          y: Number.parseInt(superhero.powerstats.intelligence),},
          {label: "Poder",
          y: Number.parseInt(superhero.powerstats.intelligence),},
          {label: "Combate",
          y: Number.parseInt(superhero.powerstats.intelligence),},
        ]
      }
    ]
  }
  $("#chartContainer").CanvasJSChart(options);
}

formularioElement.submit(function (event) {
  event.preventDefault();

  const idDelSuperHeroe = inputElement.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://www.superheroapi.com/api.php/10226951428195768/${idDelSuperHeroe}`,
  }).done(function (data) {
    renderSuperhero(data);
    renderSuperheroChart(data);

  });
});

//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: `https://www.superheroapi.com/api.php/10226951428195768/${idDelSuperHeroe}`,
//   }).done(function (data) {
//     console.log(data);
//     requestSection.innerHTML = JSON.stringify(data);
//   });
// });
//
// function getSuperheroById(id) {
//   $.ajax({
//     type: "GET",
//     url: `https//www.superheroapi.com/api.php/10226951428195768/${idDelSuperHeroe}`,
//     dataType: "json",
//     async: true,
//     success:(data) => {
//       console.log(data);
//     }
//   });
// }
//
// function getSuperheroBiographyById(id) {
//   $.ajax({
//     type: "GET",
//     url: `https//www.superheroapi.com/api.php/10226951428195768/${idDelSuperHeroe}`,
//     dataType: "json",
//     async: true,
//     success:(data) => {
//       console.log(data);
//     }
//   });
// }
//
// const SuperheroAPI = {
//   getAllSuperheroes,
//   getSuperheroById,
//   getSuperheroBiographyById
// }
//
// SuperheroAPI.getAllSuperheroes();
// SuperheroAPI.getSuperheroById(1);
// SuperheroAPI.getSuperheroById(50);
// SuperheroAPI.getSuperheroBiographyById();

/////////////////////////////////////////////
