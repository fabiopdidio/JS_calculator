// Busca as classes/IDs no HTML
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+"];

let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    return eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    return ""; // Se clicar em AC retorna uma string vazia
  } else if (btnValue === "DEL") {
    return output.toString().slice(0, -1); // Se clicar em DEL retorna a string sem o último número
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    return output + btnValue; // Se clicar somente em um númeo o número permanece na tela
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    output = calculate(e.target.dataset.value);
    display.value = output;
  }); // Percorre todos botões e ao um deles ser clicado executa a função
});
