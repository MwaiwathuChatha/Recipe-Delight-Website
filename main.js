
//We create a reference to form input from the HTML Page
const formInput = document.getElementById("search");

//We create a reference to form element itself from the HTML Page
const form = document.getElementById("search-form");

//We add an event listener so that everytime a user presses the search button we execute some code in the callback function
form.addEventListener("submit", (e) => {

  //We get the value which the user enters into the form inpute field  
  const formValue = formInput.value;

  //We clear the local storage so that there arent any persisting values
  localStorage.clear();

  //We store the value into local storage so that we can use the value in our search page
  localStorage.setItem("item", formValue);
});
