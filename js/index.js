import { url } from "./api.js"; 
import searchArticle from "./searchArticle.js";
import { saveToStorage, getFromStorage } from "./localStorage.js";
import { clearButton } from "./clearButton.js";


searchArticle();
saveToStorage("list");
clearList();


const getArticle = getFromStorage;

const articlesUrl = url + "articles";

// Make a GET request to fetch a list of resources from your API.

(async function list()  {

    const container = document.querySelector(".article-container");

    try {

        const response = await fetch(articlesUrl);
        const json = await response.json();


        // Create HTML for each item and display at least 3 properties for each.
        container.innerHTML = ""; 

        json.forEach(function (article)  {
            container.innerHTML += `<a class="article" href="index.html?id=${article.id}  <i class="far fa-heart" data-id="${article.id}"></i>
                                        <h2>${article.title}</h2>  <i class="far fa-heart" data-id="${article.id}"></i>
                                        <h4>${article.author}</h4>
                                        <p>${article.summary}</p> 
                                        </a>`;
  
        });

        console.log();

    } catch(error) {

        console.log(error);
    }
     
})();   

/*Each item should also display a button or icon. Clicking on this button should toggle the item in and 
   out of an array stored in localStorage */

   const heart = document.querySelectorAll(".article i");


   heart.forEach(function(icon)  {
        icon.addEventListener("click", clickHeart);
   })
   
   
   export function clickHeart(event)  {
        const id = event.target.dataset.id;
        console.log(id);
        
        event.target.classList.toggle("far");
        event.target.classList.toggle("fa"); 
           
   }