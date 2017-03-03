document.addEventListener('DOMContentLoaded', function () {
// Zadanie 1
var menuButton = document.querySelector('.menu a');
var subMenuButton = document.querySelector('ul.menu li ul');

console.log(menuButton);
console.log(subMenuButton);
menuButton.addEventListener('mouseover', function(event) {
  subMenuButton.style.display = "inline-block";
});
menuButton.addEventListener('mouseout', function(event) {
  subMenuButton.style.display = "none";
});

//Zadanie 2
var product1 = document.querySelector('div#box1');
var product2 = document.querySelector('div#box2');

product1.addEventListener('mouseover', function() {
    product1.firstElementChild.classList.add('showTitle');
});
product1.addEventListener('mouseout', function() {
    product1.firstElementChild.classList.remove('showTitle');
});
product2.addEventListener('mouseover', function() {
    product2.firstElementChild.classList.add('showTitle');
});
product2.addEventListener('mouseout', function() {
    product2.firstElementChild.classList.remove('showTitle');
});
//Zdaanie 3

})
