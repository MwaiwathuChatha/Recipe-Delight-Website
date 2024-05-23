import "./style.css";

//we add an event listener so that every time the page is loaded we fetch data from the API
document.addEventListener("DOMContentLoaded", () => {
  //the callback function calls fetch to retrieve the data we need. Fetch Returns a promise.
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    //Since all data returned from APIs is in JSON form, response.json() resolves it into a JavaScript Object in the form of another promise
    .then((response) => response.json())
    .then((data) => {
      //We assign variables to each of those values. We wont be using the API provide ID value.
      const mealText = data.meals[0].strMeal;
      const areaText = data.meals[0].strArea;
      const mealThumb = data.meals[0].strMealThumb;
      const mealInstructions = data.meals[0].strInstructions;
      const mealYoutubeLink = data.meals[0].strYoutube;

      //As previously defined in the html code, we create a reference to the card element where we will be injecting our data into
      const randomMealCard = document.getElementById("search-meal-card");

      // Create HTML elements to display the JSON data
      const mealTextElement = document.createElement("h2");
      mealTextElement.textContent = "Meal Name: " + mealText;

      const areaTextElement = document.createElement("h3");
      areaTextElement.textContent = "Area:  " + areaText;

      const mealYoutubeLinkElement = document.createElement("h3");
      mealYoutubeLinkElement.textContent = "Youtube Link:  " + mealYoutubeLink;

      const imageElement = document.createElement("img");
      imageElement.src = mealThumb;

      const mealInstructionsElement = document.createElement("p");
      mealInstructionsElement.textContent =
        "Instructions:  " + mealInstructions;

      // Append the elements to the "randomMealCard" div
      randomMealCard.appendChild(mealTextElement);
      randomMealCard.appendChild(areaTextElement);
      randomMealCard.appendChild(mealYoutubeLinkElement);
      randomMealCard.appendChild(imageElement);
      randomMealCard.appendChild(mealInstructionsElement);
    })
    // As with any fetch fucntion we append a catch function with a callback function that console logs the error
    .catch((error) => console.error(error));
});
