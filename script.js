const close_btn = document.querySelector('#close_btn');
const ul = document.querySelector('nav ul');

const bars = document.querySelector('#bars');

const rotate_btn = document.querySelector('#rotate_btn');

const test_cards = Array.from(document.querySelectorAll('#testimony .test'));

const nav_links = Array.from(ul.querySelectorAll('#nav_link'));

close_btn.addEventListener("click", () => {
    ul.classList.remove("show_menu");
});

bars.addEventListener("click", () => {
    ul.classList.toggle("show_menu");
});

rotate_btn.addEventListener('click', () => {
    test_cards.forEach(c => {
        c.classList.toggle("rotation");
    });
});

ul.addEventListener("click", e => {
    if(e.target.id == "nav_link"){
        ul.classList.remove("show_menu");
    }
})