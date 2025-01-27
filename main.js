/*---NAVIGATION BAR FUNCTION---*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className +=" responsive";
    }else{
        menuBtn.className = "nav-menu";
    }

}

/*ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING--*/
   
    window.onscroll = function() {headerShadow()};

    function headerShadow(){
        const navHeader = document.getElementById("header");

        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";

        }else{
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }   
    }

    /*Typing effect-------------*/

    var typingEffect = new Typed(".typedText",{
        strings : ["Designer","Developer"],
        loop : true,
        typeSpeed : 100,
        backSpeed: 80,
        backDelay : 2000

    })

/*------##---SCROLL REVEL ANIMAIION---##--------*/
const sr = ScrollReveal({
    origin:'top',
    distance : '80px',
    duration: 2000,
    reset : true,

})
/*home*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/*---Project Box------*/
sr.reveal('.project-box',{interval: 200})    

/*----HEADINGS---*/
sr.reveal('.top-header',{})

/*ABOUT INFO-----------*/
const srLeft = ScrollReveal({
    origin : 'left',
    distance : '80px',
    duration :2000,
    reset : true,
})

srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})



/*--- about skils from box---*/
const srRight = ScrollReveal({
    origin : 'right',
    distance : '80px',
    duration :2000,
    reset : true,
})

srLeft.reveal('.skills-box',{delay:100})
srLeft.reveal('.from-control',{delay:100})

/*---------CHANGE ACTIVE LINK-----*/
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrolly = window.scrollY;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        } 
    })

}

window.addEventListener('scroll', scrollActive)



function showCategory(category) {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Hide all project containers
    document.querySelectorAll('.project-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show selected category
    const selectedContainer = document.querySelector(`.project-container.${category}`);
    selectedContainer.style.display = 'flex';
}