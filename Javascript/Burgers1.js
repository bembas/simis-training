const image = document.createElement('img');
image.setAttribute('src', 'https://mcdonalds.gr/wp-content/uploads/2022/06/homestylechickenfinal-2500x1876px-with-shadow-2048x1606.png');
image.setAttribute('height', '100');
image.setAttribute('width', '100');
document.body.appendChild(image);


let burgers = ["Bacon", "Cheese", "Chicken"];
let urls = ["https://mcdonalds.gr/wp-content/uploads/2021/03/0006_Deluxe-Burger.jpg", "https://mcdonalds.gr/wp-content/uploads/2022/06/homestylechickenfinal-2500x1876px-with-shadow-2048x1606.png", "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off"];

let burgerObject = [{
  name: "bacon",
  url: "https://mcdonalds.gr/wp-content/uploads/2021/03/0006_Deluxe-Burger.jpg",
  height: 100,
  width: 100
}, {
  name: "cheese",
  url: "https://mcdonalds.gr/wp-content/uploads/2022/06/homestylechickenfinal-2500x1876px-with-shadow-2048x1606.png",
  height: 100,
  width: 100
}, {
  name: "skata",
  url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
  height: 100,
  width: 100
}];

for (let i = 0; i < burgers.length; i++) {
  let image = document.createElement('img');
  image.setAttribute('src', burgerObject[i].url);
  image.setAttribute('height', burgerObject[i].height);
  image.setAttribute('width', burgerObject[i].width);
  document.body.appendChild(image);
}