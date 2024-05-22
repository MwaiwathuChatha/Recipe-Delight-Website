import './style.css';

document.addEventListener("DOMContentLoaded",  ()=> {
    fetch('https://themealdb.com/api/json/v1/1/categories.php')
        .then(response => 
            response.json()) 
            .then((data)=>{
                console.log(data.categories[0].strCategory);
                const catergory= data.categories[0].strCategory;
                console.log(data.categories[0].strCategoryDescription);
                const catergoryDescription= data.categories[0].strCategoryDescription;

            
            //    const dataDisplay = document.getElementById("dataDisplay");
            //    const categoryElement = document.createElement("h1");
            //    categoryElement.textContent = catergory;
            //    dataDisplay.appendChild(categoryElement);
            //   const categoryDescriptionElement = document.createElement("p");
            //    categoryDescriptionElement.textContent = catergoryDescription;
            //    dataDisplay.appendChild(categoryDescriptionElement);
            }) /* 
        .then(data => {
            
            console.log(data)
         
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.strMeal;
 

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + data.strIngredient1;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + data.strIngredient2;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(ageElement);
            dataDisplay.appendChild(cityElement); 
        })*/
        .catch(error => console.error(error));
});