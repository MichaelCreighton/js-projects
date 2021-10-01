const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerPoint = (window.innerHeight / 5) * 3;
    boxes.forEach(box => {
      // getBoundingClientRect() method returns an elements position relative to the viewport
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerPoint) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    })
}

