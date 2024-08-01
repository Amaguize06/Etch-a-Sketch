const buttonSelect = document.querySelector(".buttonChild-1");
const divParantDivX = document.querySelector(".divParantDivX");

let numberSelect = 0;

let functionNumberDiv = (numberSelectFunction) => {
  if (numberSelectFunction < 2 || numberSelectFunction > 100) {
    alert(
      `Le nombre ${numberSelectFunction} n'est pas valide. Veuillez entrer un nombre entre 2 et 100.`
    );
    return;
  } else {
    numberSelectFunction = numberSelectFunction * 2;

    const divChild = document.querySelectorAll(".divChildX-1");

    divChild.forEach((divChild) => {
      divChild.remove();
    });
    for (let i = 0; i < numberSelectFunction; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("divChildX-1");
      divParantDivX.appendChild(newDiv);
      console.log(numberSelectFunction);
    }
  }
};

buttonSelect.addEventListener("click", () => {
  numberSelect = prompt("Donne chiffre entre 2 et 100", "2 - 100");
  functionNumberDiv(numberSelect);
});

const divHovered = document.querySelector(".divChildX-1");

divHovered.addEventListener("mouseover", () => {
  divHovered.classList.add("hovered");
});


// système de couleur 10% opacity
