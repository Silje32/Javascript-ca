/* This page should fetch the array of items stored in localStorage and display them or display a message 
that there are no items */

(async function array()  {

    const container = document.querySelector(".favourites-container");

    try {

        const response = await fetch(articlesUrl);
        const json = await response.json();

        if()  {
             // display the array

        }
        else {
            // display a message
        }

    } catch(error) {

        console.log(error);
    }
     
})();   
