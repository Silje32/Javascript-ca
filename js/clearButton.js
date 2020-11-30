/* There should be a "Clear all" button that clears localStorage (or just a specific key in localStorage)
   and reloads the display. Don´t reload the page, just redraw the HTML */

   
   export default function clearButton()  {

        const clearBtn = document.querySelector("#clear");

        clearBtn.addEventListener("click", clearList);

        
        function clearList() {
           // Clears localstorage
           localStorage.clear();

           // Clears the html

        } 

   };

   