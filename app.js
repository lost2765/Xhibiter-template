const showBurgerMenu = document.querySelector('#menuBurgerContent')
const burgerIcon = document.querySelector('#hamburger');
const xActive = document.querySelector("#xActive")




burgerIcon.onclick = () => {
    showBurgerMenu.classList.add('active')
}
xActive.onclick = () => {
    showBurgerMenu.classList.remove('active')
}



document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})




window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
