function page_load () {

    const content = document.querySelector('#content');

    const h1 = document.createElement("h1")
    h1.innerText = "An Amazing Restaurant"

    content.appendChild(h1)

    const p = document.createElement("p")
    p.innerText = "Welcome to our Amazing Restaurant. We're always open and offer amazing food. If you don't see your choice in own menu let us know and we'll do our best to prepare it for you."

    content.appendChild(p)

}

export { page_load };