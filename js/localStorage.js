//Clicking on this button should toggle the item in and out of an array stored in localStorage.

import { clickHeart } from "./index.js";

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

}


export function getFromStorage(key) {
    const value = localStorage.getItem(key); 

    if(!value) {
         return [];
    }

    return JSON.parse(value);

}


