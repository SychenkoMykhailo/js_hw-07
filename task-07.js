// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
let fzcontrol = document.querySelector("#font-size-control");
let text = document.querySelector("#text");
fzcontrol.addEventListener("input", fzCont);
function fzCont() {
  text.style = `font-size: ${Number(fzcontrol.value) / 2}px`;
}
