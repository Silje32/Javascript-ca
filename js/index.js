import { url } from "./api.js"; 



const articlesUrl = url + "articles";

// Make a GET request to fetch a list of resources from your API.

(async function list()  {

    const container = document.querySelector(".article-container");

    try {

        const response = await fetch(articlesUrl);
        const json = await response.json();

        console.log(json)

    } catch(error) {

        console.log(error);
    }
     
})();   