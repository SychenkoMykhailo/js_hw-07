// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
function newRes() {
  document.querySelector("#value").innerText = counterValue;
}
function increment() {
  counterValue = counterValue + 1;
  newRes();
}
function decrement() {
  counterValue = counterValue - 1;
  newRes();
}
document.querySelector("#increment").addEventListener("click", increment);
document.querySelector("#decrement").addEventListener("click", decrement);
