const num = document.querySelector(".num");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

let count = 0;

const onPlus = () => (num.textContent = count++);
const onMinus = () => (num.textContent = count--);
plus.addEventListener("click", onPlus);
minus.addEventListener("click", onMinus);

// --------------------------------------------------------------------------------------------
const items = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "grape",
  "peach",
  "tomato",
  "melon",
  "lemon",
  "pear",
  "kiwi",
  "mango",
  "plum",
  "pineapple",
  "lime",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
];
const ulEl = document.querySelector(".js-list-items");
const inputEl = document.querySelector(".search");

for (let i = 0; i < items.length; i++) {
  const liEl = document.createElement("li");
  liEl.textContent = items[i];
  ulEl.appendChild(liEl);
}

const onInputSearch = (e) => {
  const { value } = e.target;
  const liEls = document.querySelectorAll("li");
};

inputEl.addEventListener("input", onInputSearch);
