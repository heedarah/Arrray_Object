const Fruit_emojis = {
  Mango: "🥭",
  Apple: "🍎",
  Orange: "🍊",
  "Straw Berry": "🍓",
  Banana: "🍌",
};
const fruitList = document.getElementById("fruitList");
const fruitText = document.getElementById(`selectFruit`);

fruitList.onchange = function () {
  const selectFruit = fruitList.value;

  if (selectFruit) {
    fruitText.innerText = `you select : ${Fruit_emojis[selectFruit]}`;
  } else {
    selectFruit.innerText = ``;
  }
};
