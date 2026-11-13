import "./styles.css";

import backgroundImage from "./images/vectorelements-pe2mRylw9u8-unsplash.png";
document.body.style.backgroundImage = `url(${backgroundImage})`;

const content = document.querySelector('#content');

import { load_home, load_menu, load_about } from "./content.js";

load_home();

const home_button = document.querySelector("#home")
home_button.addEventListener("click", () => {
    content.innerText = ""
    load_home();
})

const menu_button = document.querySelector("#menu")
menu_button.addEventListener("click", () => {
    content.innerText = ""
    load_menu();
})

const about_button = document.querySelector("#about")
about_button.addEventListener("click", () => {
    content.innerText = ""
    load_about();
})