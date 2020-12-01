// There should be a text input on this page that filters the array of results on one of the properties.


export function searchArticle(list)  {
    const search = document.querySelector(".filter");

    search.onkeyup = function (event) {
        console.log(event);
        const filterValue = event.target.value.trim().toLowerCase();

        const filteredArticles = list.filter (function (list)  {
            
            if(list.title.toLowerCase().startsWidt(filterValue)) {

                return true;
            }

        });
           console.log(filteredArticles);

           newList = filteredArticles;



    };

}

