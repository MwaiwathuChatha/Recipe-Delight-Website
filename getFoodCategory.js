import "./style.css";

//We add an event listener so that every time the page is loaded we fetch data from the API
document.addEventListener("DOMContentLoaded", () => {
  //The callback function calls fetch to retrieve the data we need. Fetch Returns a promise.
  fetch("https://themealdb.com/api/json/v1/1/categories.php")
    //Since all data returned from APIs is in JSON form, response.json() resolves it into a JavaScript Object in the form of another promise
    .then((response) => response.json())
    .then((data) => {
      //For loop that iterates through the data from API that is in the form of an Array called categories.
      //The API gives us the the Category ID, Category name, Category Description and Category Thumbnail.

      for (let i = 0; i < data.categories.length; i++) {
        //We assign variables to each of those values. We wont be using the API provide ID value.
        const categoryText = data.categories[i].strCategory;
        const categoryDescriptionText =
          data.categories[i].strCategoryDescription;
        const categoryThumbnail = data.categories[i].strCategoryThumb;

        //As previously defined in the html code, we create a reference to the card element where we will be injecting our data into
        const categoryCard = document.getElementById("food-category-card");

        // Create HTML elements to display the JSON data
        const categoryElement = document.createElement("h2");
        categoryElement.textContent = "Category: " + categoryText;
        const categoryDescriptionElement = document.createElement("p");
        categoryDescriptionElement.textContent =
          "Description:  " + categoryDescriptionText;
        const imageElement = document.createElement("img");
        imageElement.src = categoryThumbnail;

        // Append the elements to the "categoryCard" div
        categoryCard.appendChild(categoryElement);
        categoryCard.appendChild(imageElement);
        categoryCard.appendChild(categoryDescriptionElement);
      }
    })
    // As with any fetch fucntion we append a catch function with a callback function that console logs the error
    .catch((error) => console.error(error));
});
