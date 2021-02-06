// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const boxes = document.querySelector("#boxes");
const but_1_create = document.querySelector("#button_1");
const but_2_clear = document.querySelector("#button_2");
but_1_create.addEventListener("click", createBoxes);
but_2_clear.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  amount = document.querySelector("input").value;
  let h = 20;
  let w = 20;
  for (let i = 0; i < Number(amount); i += 1) {
    h = h + 10;
    w = w + 10;
    let newDiv = document.createElement("div");
    newDiv.style = `height:${h}px; width:${w}px; background-color: rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    boxes.append(newDiv);
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
  //   Использовал .innerHTML, а не .remove() потому что .remove() не удалял элементы полностью,
  //   а делал их невидимыми. Из-за этого программа не работала при повторном использовании
}
