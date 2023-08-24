// custom cursor codes

const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', e => {
    // console.log(e);
    cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;");
});

// changing cursor style on hover
const anchorPoints = document.querySelectorAll('a');

console.log(anchorPoints);

for (var i = 0; i < anchorPoints.length; i++) {
    anchorPoints[i].addEventListener('mouseenter', changeCursorStyle);
    anchorPoints[i].addEventListener('mouseleave', resetCursorStyle);
}

function changeCursorStyle() { 
    cursor.classList.add('cursor-hovering');
}

function resetCursorStyle() {
    cursor.classList.remove('cursor-hovering');

}

// faire apparaitre les liens cahes
const holderMenu = document.querySelector('.holder-menu');
const topMenuLine = document.querySelector('.menu-line1');
const bottomMenuLine = document.querySelector('.menu-line2');
const menuBackground = document.querySelector('.menu-bg');
const menuContainer = document.querySelector('.menu-container');

let menuOpen = false;
holderMenu.addEventListener('click',() => {
    if(!menuOpen) {
        topMenuLine.classList.add('open');
        bottomMenuLine.classList.add('open');
        holderMenu.classList.add('open');
        menuBackground.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        menuBackground.style.visibility = "visible";
        menuContainer.style.transform = "translateX(100%)";
        // menuContainer.style.transform = "translateY(50%)"; 
        menuOpen = true;
    } else {
        topMenuLine.classList.remove('open');
        bottomMenuLine.classList.remove('open');
        holderMenu.classList.remove('open');
        menuBackground.style.backgroundColor = "rgba(255, 255, 255, 0)";
        menuBackground.style.visibility = "hidden";
        menuContainer.style.transform = "translateX(200%)";
        menuOpen = false;
    }
});

// faire changer la couleur du menu-holder
window.addEventListener('scroll', changeHolderMenu);

function changeHolderMenu() {
    if (window.scrollY > 1) {
        holderMenu.style.backgroundColor = "black";
        topMenuLine.style.backgroundColor = "white";
        bottomMenuLine.style.backgroundColor = "white";
        holderMenu.classList.add('scrolled-menu');
        topMenuLine.classList.add('scrolled-menuLine');
    } 
    else {
        holderMenu.style.backgroundColor = "white";
        topMenuLine.style.backgroundColor = "#2b00d4";
        bottomMenuLine.style.backgroundColor = "#2b00d4";
        holderMenu.classList.remove('scrolled-menu');
        topMenuLine.classList.remove('scrolled-menuLine');
    }
};

// sticky hover animation codes

class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }
    
    attachEventsListener() {
        window.addEventListener("mousemove", (e) => this.onMouseMove(e));
        window.addEventListener("resize", (e) => this.calculatePosition(e));
    }
    
    calculatePosition() {
        gsap.set(this.el, {
            x: 1,
            y: 2,
            scale: 1,
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
    }
    
    onMouseMove(e) {
        let hover = false;
        let hoverArea = this.hover ? 0.7 : 0.5;
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }
    
        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }
    
    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.15,
            ease: "power2.out",
            duration: 0.4
        });
        this.el.style.zIndex = 10;
    }
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: "elastic.out(1.2, 0.4)",
            duration: 0.7
        });
        this.el.style.zIndex = 1; 
    }
    }
    
    const stickyButton = document.querySelector('.contact-us');
    new HoverButton(stickyButton); 
    
    const stickyButton2 = document.querySelector('.lets-talk');
    new HoverButton(stickyButton2); 
    
    const stickyButton3 = document.querySelector('#anchor-contact');
    new HoverButton(stickyButton3); 
    
    const stickyButton4 = document.querySelector('.reel-holder');
    new HoverButton(stickyButton4); 

    // const stickyButton5 = document.querySelector('.des');
    // new HoverButton(stickyButton5); 

    // const stickyButton5 = document.querySelector('.social-link-menu img');
    // new HoverButton(stickyButton5); 
    
    // End of sticky hover animation codes


//     tilting effect on the cards
//     for the first card
// var first=document.querySelector(".des");
//     first.addEventListener("mousemove",function(event){
//     var chief=first.offsetWidth;
//     var given=first.offsetHeight;
//     positionX = (event.clientX/chief) - 0.55;
//     positionY = (event.clientY/given) - 0.55;
//     gsap.to(".des",{
        
//         rotationY:positionX * 30,
//         rotationX:positionY * 30,
//         ease:"none"

    
//     })
// });
// for tthe second card

// var second=document.querySelector(".second-slide");
//     second.addEventListener("mousemove",function(event){
//     var chief=second.offsetWidth;
//     var given=second.offsetHeight;
//     positionX = (event.clientX/chief) - 0.55;
//     positionY = (event.clientY/given) - 0.55;
//     gsap.to(".second-slide",{
        
//         rotationY:positionX * 30,
//         rotationX:positionY * 30,
//         ease:"none"

    
//     })
// });
// for the third card
// var third=document.querySelector(".third-slide");
//     third.addEventListener("mousemove",function(event){
//     var chief=third.offsetWidth;
//     var given=third.offsetHeight;
//     positionX = (event.clientX/chief) - 0.55;
//     positionY = (event.clientY/given) - 0.55;
//     gsap.to(".third-slide",{
        
//         rotationY:positionX * 30,
//         rotationX:positionY * 30,
//         ease:"none"

    
//     })
// });

// for the last card
// var last=document.querySelector(".last");
//     last.addEventListener("mousemove",function(event){
//     var chief=last.offsetWidth;
//     var given=last.offsetHeight;
//     positionX = (event.clientX/chief) - 0.55;
//     positionY = (event.clientY/given) - 0.55;
//     gsap.to(".last",{
        
//         rotationY:positionX * 30,
//         rotationX:positionY * 30,
//         ease:"none"

    
//     })
// });

// end of the tilting effect on cards


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    console.log(reveals);

    for (var i=0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        console.log(revealtop);
        var revealpoint = 50;

        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
