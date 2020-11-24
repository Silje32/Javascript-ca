import { url } from "./api.js"; 



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
            container.innerHTML += `<a class="article" href="index.html?id=${article.id}">
                                        <h1>${article.title}</h1>
                                        <h4>${article.author}</h4>
                                        <p>${article.summary}</p>
                                        </a>`;

        
            
        });

    } catch(error) {

        console.log(error);
    }
     
})();   