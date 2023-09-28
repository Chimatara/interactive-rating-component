const submitButton = document.getElementById("btn");
const ratingButtons = document.querySelectorAll(".ratings");


// Function to set the selected rating in localStorage
function setSelectedRating(rating) {
    localStorage.setItem('selectedRating', rating);
  }
  
  // Function to get the selected rating from localStorage
  function getSelectedRating() {
    return localStorage.getItem('selectedRating');
  }
  

  // the remove class function
function removeClasslist() {
    ratingButtons.forEach((rating) => {
      rating.classList.remove("active");
    });
  }


// takes you to the success page
function onClick() {
  submitButton.addEventListener("click", () => {
    const selectedRating = getSelectedRating();
    window.location.href = `success.html?rating=${selectedRating}`;
  });
}
onClick();


// it adds an active class and removes an already selected number
ratingButtons.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    const selectedRating = rating.dataset.rating;

    // the conditional statement deselects an already active class
    if (rating.classList.contains("active")) {
      rating.classList.remove("active");
      setSelectedRating(null); // Deselect the rating
    } else {
      removeClasslist();
      rating.classList.add("active");
      const selectedRating = rating.dataset.rating;
      setSelectedRating(selectedRating);
    }

    // stops the event from reaching the document body when a button is clicked
    event.stopPropagation();
  });
});



// add a click event listener to the document body
document.body.addEventListener('click', () => {
  removeClasslist();
});
