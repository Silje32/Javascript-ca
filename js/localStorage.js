//Clicking on this button should toggle the item in and out of an array stored in localStorage.

const array = "title"; 

export function getTitle() {
    const titles = localStorage.getItem(array); 

    if(wishlist === null) {
         return [];
    }

    return JSON.parse(title)

}


export function storeTitle(title) {
    localStorage.setItem(array, JSON.stringify(title));

}