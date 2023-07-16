//scroll

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click' , () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
})

window.onscroll = () => {
    //sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky' , window.scrollY > 100)

     sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        console.log('offset' , offset)
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                console.log('id' + document.querySelector('header nav a[href*=' + id + ']'))
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    //remove active nav when click a link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
}


