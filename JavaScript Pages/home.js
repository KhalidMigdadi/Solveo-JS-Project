const images = document.querySelectorAll(".slider-image");
let currentIndex = 0;

function logoutt() {
  localStorage.removeItem("users");
  window.location.href = "login.html";
}

function changeSlide() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(changeSlide, 3000); // Change image every 3 seconds

// make filtrations

let shuffle = document.querySelectorAll(".shuffle li");
let boxes = document.querySelectorAll(".box");

function filers(category) { // the value that the user choose it 
  boxes.forEach((box) => {
    // Hide all boxes initially
    box.style.display = "none";

    // Show boxes based on selected category
    if (category == "all" || box.dataset.category === category) { // compare the cat with the cat selected 
      box.style.display = "block";
    }
  });
}

shuffle.forEach((li) => {
  li.addEventListener("click", function () {
    // Update active class

    shuffle.forEach((removes) => removes.classList.remove("active"));
    li.classList.add("active");

    // Update active class
    let selectedCategory = li.getAttribute("data-category");

    // Call the function to filter boxes
    filers(selectedCategory);
  });
});


let arr1 = [1, 2, 3, 4, 5];
// function reverse(arr1) {
  // for (let i = 0; i < arr1.length / 2; i++) {
  //   let reversed = arr1[i];                 
  //   arr1[i] = arr1[arr1.length - 1 - i];  
  //   arr1[arr1.length - 1 - i] = reversed;    
  // }
  // return arr1;  
// }

for (let i = arr1.length-1; i >= 0; i--) {
    console.log(arr1[i]);
    
}

// console.log(reverse(arr1)); 
