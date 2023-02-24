window.addEventListener("load", init);
function init() {
  //const tartalomElem=document.getElementById("tartalom")
  //const tartalomMaskepp = document.querySelector("#tartalom")
  const tartalomElem3 = document.querySelectorAll(".tartalom");
  console.log(tartalomElem3);
  const items = ["Bolognai", "Fagyi", "Szőlő"];

  // Get the reference to the list container element
  const listContainer = document.getElementById("tartalom");

  // Create a new unordered list element
  const ul = document.createElement("ul");

  // Loop through the items array and create a list item for each item
  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  // Add the unordered list to the list container element
  listContainer.appendChild(ul);
  kajafoto();
}
function kajafoto(){
    const image1 = document.createElement("img");
  image1.src = "bolognai.jpg";

  // Create the first div element and append the first image to it
  const div1 = document.createElement("div");
  div1.appendChild(image1);

  // Create the second image element
  const image2 = document.createElement("img");
  image2.src = "icecream.jpg";

  // Create the second div element and append the second image to it
  const div2 = document.createElement("div");
  div2.appendChild(image2);

  // Find the article tag and append both div elements to it
  const article = document.querySelector("article");
  article.appendChild(div1);
  article.appendChild(div2);
}
