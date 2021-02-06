// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const list = document.querySelector("#ingredients");
const createLI = function () {
  for (let i = 0; i < ingredients.length; i += 1) {
    let newElem = document.createElement("li");
    newElem.innerText = ingredients[i];
    list.append(newElem);
  }
};
createLI();
console.log(list);
