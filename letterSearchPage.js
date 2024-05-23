import "./style.css";

//we add an event listener so that every time the page is loaded we fetch data from the API
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const letterValue = urlParams.get("letter");
  const URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letterValue;
  //the callback function calls fetch to retrieve the data we need. Fetch Returns a promise.
  fetch(URL)
    //Since all data returned from APIs is in JSON form, response.json() resolves it into a JavaScript Object in the form of another promise
    .then((response) => response.json())
    .then((data) => {
      // //For loop that iterates through the data from API that is in the form of an Array called meals.
      // //The API gives us the the Category ID, Category name, Category Description and Category Thumbnail.

      //    //We assign variables to each of those values. We wont be using the API provide ID value.
      for (let i = 0; i < data.meals.length; i++) {
        const mealText = data.meals[i].strMeal;
        const areaText = data.meals[i].strArea;
        const mealThumb = data.meals[i].strMealThumb;
        const mealInstructions = data.meals[i].strInstructions;
        const mealYoutubeLink = data.meals[i].strYoutube;

        //As previously defined in the html code, we create a reference to the card element where we will be injecting our data into
        const searchMealCard = document.getElementById("search-meal-card");

        // Create HTML elements to display the JSON data
        const mealTextElement = document.createElement("h2");
        mealTextElement.textContent = "Meal Name: " + mealText;

        const areaTextElement = document.createElement("h3");
        areaTextElement.textContent = "Area:  " + areaText;

        const mealYoutubeLinkElement = document.createElement("h3");
        mealYoutubeLinkElement.textContent =
          "Youtube Link:  " + mealYoutubeLink;

        const imageElement = document.createElement("img");
        imageElement.src = mealThumb;

        const mealInstructionsElement = document.createElement("p");
        mealInstructionsElement.textContent =
          "Instructions:  " + mealInstructions;

        //Append the elements to the "search-meal-card" div
        searchMealCard.appendChild(mealTextElement);
        searchMealCard.appendChild(areaTextElement);
        searchMealCard.appendChild(mealYoutubeLinkElement);
        searchMealCard.appendChild(imageElement);
        searchMealCard.appendChild(mealInstructionsElement);
      }
    })
    // As with any fetch fucntion we append a catch function with a callback function that console logs the error
    .catch((error) => console.error(error));
});
