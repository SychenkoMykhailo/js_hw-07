// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.
let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
let innerOutput = output.innerText;
input.addEventListener("input", inp);
function inp() {
  if (input.value === "") {
    output.innerText = innerOutput;
  } else {
    output.innerText = input.value;
  }
}
