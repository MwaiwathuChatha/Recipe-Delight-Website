

const formInput = document.getElementById("search"); 
const form = document.getElementById("search-form"); 

form.addEventListener("submit", (e) => {
    const formValue=formInput.value;
    localStorage.clear();
    localStorage.setItem('item',formValue);

   
   

    
})
