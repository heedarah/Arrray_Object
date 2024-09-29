// let items = `<ol>`;
// items += `<li>${shoppingList["Fruit-Juice"]}</li>`;
// items += `<li>${shoppingList["Bread"]}</li>`;
// (items += `<li>${shoppingList["Soy Sauce"]}</li>`),
//   (items += `<li>${shoppingList[("Cereal", "Cake")]}</li>`);
// // items += `<li>${shoppingList[4]}</li>`;
// items += "</ol>"; //
// document.getElementById("shopping-List").innerHTML = items;

const shoppingItems = [`Fruit-Juice`, `Bread`, `Soy Sauce`, `Cereals`, `Cake`];
const shoppingItems2 = [`Fruit-Juice`, `Bread`, `Soy Sauce`, `Cereals`, ``];
const shoppingList = document.getElementById("shopping-list");
for (let i = 0; i < shoppingItems.length; i++) {
  let li = document.createElement("li");
  li.textContent = shoppingItems[i];
  shoppingList.appendChild(li);
  console.log(shoppingItems);
}

shoppingItems.pop();

const fruits = ["Mango", "Apple", "Orange", "Strawberry", "Banana"];
