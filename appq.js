// Entrega final de Javascript - CoderHouse año 2022, mes junio. Comisión 30335. Profesor : Rodrigo Río del Val.
// Alumna : Florencia Quilodrán

//Utilizando selectores dentro de elemento
//Utilizando DOM

const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {
  const btn = pregunta.querySelector(".pregunta-btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    console.log(pregunta);

    preguntas.forEach(function (item) {
      if (item !== pregunta) {
        item.classList.remove("show-text");
      }
    });

    pregunta.classList.toggle("show-text");
  });
});
