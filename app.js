const h1 = document.querySelector(".hello1");

function clickEvent() {
  h1.classList.toggle("active");
  //   const clickedClass = "active";
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
  // }
}
h1.addEventListener("click", clickEvent);
