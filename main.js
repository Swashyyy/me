/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1800,
    reset: false
});

const sr__2 = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1400,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__subtitle',{delay: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__title',{}); 
sr.reveal('.skills__subtitle',{delay: 200}); 
sr__2.reveal('.skills__div',{interval: 100}); 


/*SCROLL CONTACT*/
sr.reveal('.contact__title',{}); 
sr.reveal('.contact__subtitle',{delay: 200}); 
sr__2.reveal('.contact__div',{interval: 100}); 