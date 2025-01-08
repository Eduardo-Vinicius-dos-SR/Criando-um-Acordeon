const question = document.querySelectorAll(".question-title");
const questionText = document.querySelectorAll(".question-text");

question.forEach((item, indice) => {
  item.addEventListener("click", () => {
    const questionImage = item.querySelector("img");
    
    if (questionText[indice].classList.contains("show")) {
     questionText[indice].classList.remove("show");
     questionImage.src = "./src/images/seta.png";
     return
    }

    questionText[indice].classList.add("show");
    questionImage.src = "./src/images/seta aberta.png";


    questionText.forEach((text, i) => {
      if (i !== indice) {
        text.classList.remove("show");
      }

      if (item !== question[i]) {
        question[i].querySelector("img").src = "./src/images/seta.png";
      }
      
    });
  });
});