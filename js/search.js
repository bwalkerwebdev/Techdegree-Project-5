let searchBox = document.querySelector("#search");
let pictures = document.querySelector("a");

for (let i = 0; i < pictures.length; i++) {
  console.log(pictures[i].dataset.title);
}
