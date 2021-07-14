const formularioElement = $("#formulario");
const inputElement = $("#superhero-input");
const requestSection =$("#request-section");

console.log(formularioElement);

formularioElement.submit(function () {
  event.preventDefault();

  const idDelSuperHeroe = inputElement.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://superheroapi.com/api.php/10226951428195768/${idDelSuperHeroe}`
  }).done(function (data) {
    requestSection.innerHTML = JSON.stringify(data);
  });
});
