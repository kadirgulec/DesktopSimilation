const icons = document.querySelectorAll(".item");
console.log (icons);
const clicked = e => {
    let itemId = e.target.id;
    console.log(itemId);
}
for(let icon of icons) {
    icon.addEventListener("click", clicked);

}