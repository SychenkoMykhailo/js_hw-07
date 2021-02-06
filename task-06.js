// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
// 	border: 3px solid #bdbdbd;
//   }
//   #validation-input.valid {
// 	border-color: #4caf50;
//   }
//   #validation-input.invalid {
// 	border-color: #f44336;
//   }
let input = document.querySelector("#validation-input");
input.addEventListener("blur", checkValid);
function checkValid() {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
}
