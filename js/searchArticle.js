// There should be a text input on this page that filters the array of results on one of the properties.

export default function searchArticle(articles)  {

    const search = document.querySelector("input.filter");

    search.addEventListener("keyup", filtering)

    function filtering(event)  {
        const filterValue = parseFloat(event.target.value);
        
        console.log(filterValue);
   

    }

}