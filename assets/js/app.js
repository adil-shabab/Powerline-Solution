

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 350) {
//         $('.h1__tag').addClass('active')
//     }
//     else{
//         $('.h1__tag').removeClass('active')
//     }
//   });

let h1_parent = document.querySelector('.h1_parent')
const tl7 = gsap.timeline({
  scrollTrigger:{
    trigger: h1_parent,
    start: "top 50%", 
    end: "top 1%", 
    scrub: 0,
    // pin:true,
    // markers:true,
    
    ease: "power2",
  },
})
gsap.set(['.h1_parent'], {scale: 1.3})
tl7.to(['.h1_parent'], { scale: 4, })
tl7.to(['.h1_parent'], { scale:6})
tl7.to(['.h1_parent'], { opacity:0})



let h1_tag = document.querySelector('.h1__tag')
const tl5 = gsap.timeline({
  scrollTrigger:{
    trigger: h1_tag,
    start: "top 85%", 
    end: "top 50%", 
    scrub: 0,
    // pin:true,
    // markers:true,
    
    ease: "power2",
  },
})
gsap.set(['.h1__tag'], {opacity: 0, x:-800, scale: 1.3})
tl5.to(h1_tag, { opacity: 1, x:0})
tl5.to(h1_tag, { duration: 0.5})

let h1__tag = document.querySelector('.h1___tag')

const tl6 = gsap.timeline({
  scrollTrigger:{
    trigger: h1__tag,
    start: "top 85%", 
    end: "top 50%", 
    scrub: 0,
    // pin:true,
    // markers:true,
    
    ease: "power2",
  },
})
gsap.set(['.h1___tag'], {opacity: 0, x:800, scale: 1.3})
tl6.to(h1__tag, { opacity: 1, x:0})
tl6.to(h1__tag, { duration: 0.5})



panel_one = gsap.utils.toArray('.panel')
panel_two = gsap.utils.toArray('.second-panel')

panel_one.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            // markers: true,
            start: "top 70%", 
            end: "top 1%", 
            scrub: 0,
            
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }
    })
    

    gsap.set(['.panel'], {opacity: 0, scale: 0.1, transformOrigin: '50% 50%'})
    tl.to(box, { opacity: 1, x: -220, scale: 1.8, y: 0})
    tl.to(box, {duration: 0.5, scale: 1.8, opacity: .1})
    
})    


panel_two.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            // markers: true,
            start: "top 70%", 
            end: "top 1%",
            scrub: 0,
            
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }
    })
    

    gsap.set(['.panel'], {opacity: 0, scale: 0.1, transformOrigin: '50% 50%'})
    tl.to(box, { opacity: 1, x: 220, scale: 1.8, y: 0})

    tl.to(box, {duration: 0.5, opacity: 0.1})
})    








panels_one = gsap.utils.toArray('.panels')
panels_two = gsap.utils.toArray('.second-panels')

panels_one.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            // markers: true,
            start: "top 70%", 
            end: "top 1%", 
            scrub: 0,
            
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }
    })
    

    gsap.set(['.panels'], {opacity: 0, scale: 0.1, transformOrigin: '50% 50%'})
    tl.to(box, { opacity: 1, x: 125, scale: 1.3})
    tl.to(box, {duration: 0.5, scale: 1.4, opacity: .1})
    
})    


panels_two.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            // markers: true,
            start: "top 70%", 
            end: "top 1%",
            scrub: 0,
            
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }
    })
    

    gsap.set(['.panels'], {opacity: 0, scale: 0.1, transformOrigin: '50% 50%'})
    tl.to(box, { opacity: 1, scale: 1.4, x: -100})
    tl.to(box, {duration: 0.5, opacity: 0.1})
})    














// let cursor = document.querySelector(".cursor");
// let cursorScale = document.querySelectorAll(".cursor-scale");
// let mouseX = 0;
// let mouseY = 0;

// gsap.to({}, 0.01, {
//   repeat: -1,
//   onRepeat: function () {
//     gsap.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY
//       }
//     });
//   }
// });

// window.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// cursorScale.forEach((link) => {
//   link.addEventListener("mousemove", () => {
//     cursor.classList.add("grow");
//   });

//   link.addEventListener("mouseleave", () => {
//     cursor.classList.remove("grow");
//   });
// });