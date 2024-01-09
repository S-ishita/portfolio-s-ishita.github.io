/*menu show*/
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//remove menu mobile
const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n =>n.addEventListener('click',linkAction))

//scroll section active link
const sections=document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current => {
        const sectionHeight =current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId =current.getAttribute('id')
        
        if(scrollY>sectionTop && scrollY <=sectionTop +sectionHeight){
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('nav__menu a[href*=' +sectionId + ']').classList.remove('active')
        }
    })
}
//scroll reveal animation
const sr=ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000',
    reset: true
})

//scroll home
sr.reveal('.home__title',{})
sr.reveal('.home__scroll',{delay: 200})
sr.reveal('.home__img',{origin: 'right',delay: 400})

//scroll about
sr.reveal('.about__img',{delay:500})
sr.reveal('.about__subtitle',{delay:300})
sr.reveal('.about__profession',{delay:400})
sr.reveal('.about__text',{delay:500})
sr.reveal('.about__social-icon',{delay:600, interval: 200})

//scroll skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__name',{distance:'20px',delay:50,interval:100})
sr.reveal('.skills__subtitle',{delay: 400})

//scroll portfolio
sr.reveal('.portfolio__img',{interval: 200})

//scroll contact
sr.reveal('.contact__subtitle',{})
sr.reveal('.contact__text',{interval: 200})
sr.reveal('.contact__input',{delay: 400})
sr.reveal('.contact__button',{delay: 600})

//scroll education
sr.reveal('.date',{})
sr.reveal('.institute',{interval: 200})
sr.reveal('.stream',{delay: 400})
