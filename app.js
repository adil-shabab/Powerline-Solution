


let hello = document.querySelectorAll('.hello')
for (let i = 0; i < hello.length; i++) {
  hello[i].addEventListener("click", function() {
    img = hello[i].querySelector('.img').src
    document.querySelector('.first-div').classList.add('active')
    document.querySelector('.second-div').classList.add('active')
    let image = document.createElement('img')
    image.setAttribute('src', img)
    image.classList.add('img-fluid')
    let h1 = document.createElement('h1')
    h1.innerHTML = hello[i].querySelector('h3').innerHTML
    let p = document.createElement('p')
    p.innerHTML = hello[i].querySelector('p').innerHTML
    // image.classList.add('img-fluid')
    document.querySelector('.first-div').appendChild(image)
    document.querySelector('.second-div').appendChild(h1)
    document.querySelector('.second-div').appendChild(p)
  });
}






document.querySelector('.single-page').addEventListener('click', function(){
  document.querySelector('.first-div').classList.remove('active')
  document.querySelector('.second-div').classList.remove('active')
  document.querySelector('.first-div').replaceChildren();
  document.querySelector('.second-div').replaceChildren();
})
gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ease: "none", duration: 2});


panel_one = gsap.utils.toArray('.panel')
panel_two = gsap.utils.toArray('.second-panel')



panel_one.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            markers: true,
            start: "top 65%", 
            end: "top 2%", 
            scrub: 0,
            
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
        }
    })
    
    tl.to(box, {scale: 0.4, duration: 5})
    .to(box, {scale: 1.2, duration: 5})
    .to(box, {scale: 1.4, duration: 5})
    // .to(box, {y: 150, duration: 3})
    .to(box, {scale: 2.2, duration: 5})
    .to(box, {scale: 2.8, duration: 5})
    .to(box, {scale: 3.2, duration: 5})
      .to(box, {x: 400, duration: 3})
      // .to(box, {x: 600, duration: 3})
      // .to(box, {x: 900, duration: 3})
      .to(box, {y: -250, duration: 3})
      // .to(box, {x: 600, duration: 3})
      // .to(box, {x: 1400, duration: 3})
      // .to(box, {y: -20, duration: 5})
})    



panel_two.forEach(box => {

  const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: box,
        markers: true,
        start: "top 100%", 
        end: "top 2%", 
        ease: "power4.inOut",
        duration: 0.55,
        scrub: 0,
        
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
    }
})

tl2.to(box, {scale: 0.4, duration: 5})
.to(box, {scale: 1.2, duration: 5})
.to(box, {scale: 1.4, duration: 5})
// .to(box, {y: 150, duration: 3})
.to(box, {scale: 2.2, duration: 5})
.to(box, {scale: 2.8, duration: 5})
.to(box, {scale: 3.2, duration: 5})
.to(box, {x: -400, duration: 3})
// .to(box, {x: -600, duration: 3})
// .to(box, {x: -900, duration: 3})
.to(box, {y: -150, duration: 3})
  // .to(box, {x: -200, duration: 3})
  // .to(box, {x: -600, duration: 3})
  // .to(box, {x: -1400, duration: 3})
  // .to(box, {y: -20, duration: 5})

})















let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.01, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

