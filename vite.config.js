import { defineConfig } from "vite";
import {resolve} from "path";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname,"index.html"),
                food_category_page:resolve(__dirname,"/pages/food-category-page/index.html"),
                letter_search_page:resolve(__dirname,"/pages/letter-search-page/index.html"),
                random_meal_page:resolve(__dirname,"/pages/random-meal-page/index.html"),
                search_meal_page:resolve(__dirname,"/pages/search-meal-page/index.html")
            }
        }
    }
})