// There should be a text input on this page that filters the array of results on one of the properties.

export default function searchArticle(list)  {

    const search = document.querySelectorAll("input.filter");

    search.addEventListener("keyup", filtering)


    function filtering(event)  {
        const filterValue = stringify(event.target.value);
        
        console.log(filterValue);
   

    }

}

