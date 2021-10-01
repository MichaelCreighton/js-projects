// watch plus sign for click and then open menu
const plus = document.getElementById("plus");
plus.addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('show-nav');   
});


const navElements = document.querySelectorAll("a");
// collapse menu after selection
navElements.forEach(elm => {
    elm.addEventListener('click', function() {        
        document.querySelector(".container").classList.toggle("show-nav");
    });
});