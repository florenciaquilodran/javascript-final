//using selectors inside the element
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {
  const btn = pregunta.querySelector(".pregunta-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(pregunta);

    preguntas.forEach(function (item) {
      if (item !== pregunta) {
        item.classList.remove("show-text");
      }
    });

    pregunta.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });