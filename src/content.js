function load_home () {
    const content = document.querySelector('#content');

    const title = document.createElement("h1")
    title.innerText = "An Amazing Restaurant"
    content.appendChild(title)

    const paragraph = document.createElement("p")
    paragraph.innerText = "Welcome to our Amazing Restaurant. We're always open and offer amazing food. If you don't see your choice in own menu let us know and we'll do our best to prepare it for you."
    content.appendChild(paragraph)
}

function load_menu () {
    const content = document.querySelector('#content');

    const title = document.createElement("h1")
    title.innerText = "An Amazing Restaurant - Menu"
    content.appendChild(title)

    const paragraph = document.createElement("p")
    paragraph.innerText = "This is our amazing menu."
    content.appendChild(paragraph)

    const option1title = document.createElement("h3")
    option1title.innerText = "Lasagna"
    content.appendChild(option1title)

    const option1description = document.createElement("p")
    option1description.innerText = "An Amazing Lasagna with an Amazing House Salad and an accompaniment to an Amazing Garlic Bread"
    content.appendChild(option1description)

    const option2title = document.createElement("h3")
    option2title.innerText = "Spaghetti and Meatballs"
    content.appendChild(option2title)

    const option2description = document.createElement("p")
    option2description.innerText = "An Amazing Spaghetti and Meatballs with an Amazing House Salad and an accompaniment to an Amazing Garlic Bread"
    content.appendChild(option2description)

    const option3title = document.createElement("h3")
    option3title.innerText = "Pizza Margherita"
    content.appendChild(option3title)

    const option3description = document.createElement("p")
    option3description.innerText = "An Amazing Pizza Margherita with an Amazing House Salad and an accompaniment to an Amazing Garlic Bread"
    content.appendChild(option3description)

}

function load_about () {
    const title = document.createElement("h1");
    title.innerText = "An Amazing Restaurant - About";
    content.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.innerText = 'This page was setup for a course task for ';
    const link = document.createElement("a");
    link.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
    link.innerText = "The Odin Project: Restaurant Page";
    paragraph.appendChild(link);
    content.appendChild(paragraph);
}

export { load_home, load_menu, load_about };
