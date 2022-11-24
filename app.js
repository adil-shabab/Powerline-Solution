gsap.registerPlugin(ScrollTrigger)



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
            toggleClass: {targets: box, className: 'active'}
        }
    })
    
    tl.to(box, {scale: 0.4, duration: 5})
    .to(box, {scale: 1.2, duration: 5})
    .to(box, {scale: 1.4, duration: 5})
    .to(box, {y: 150, duration: 3})
    .to(box, {scale: 2.2, duration: 5})
    .to(box, {scale: 2.8, duration: 5})
    .to(box, {scale: 3.2, duration: 5})
      .to(box, {x: 200, duration: 3})
      .to(box, {x: 600, duration: 3})
      .to(box, {x: 1400, duration: 3})
      .to(box, {y: -380, duration: 5})

})    




panel_two.forEach(box => {

  const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: box,
        markers: true,
        start: "top 65%", 
        end: "top 2%", 
        scrub: 0,
        toggleClass: {targets: box, className: 'active'}
    }
})

tl2.to(box, {scale: 0.4, duration: 5})
.to(box, {scale: 1.2, duration: 5})
.to(box, {scale: 1.4, duration: 5})
.to(box, {y: 150, duration: 3})
.to(box, {scale: 2.2, duration: 5})
.to(box, {scale: 2.8, duration: 5})
.to(box, {scale: 3.2, duration: 5})
  .to(box, {x: -200, duration: 3})
  .to(box, {x: -600, duration: 3})
  .to(box, {x: -1400, duration: 3})
  .to(box, {y: -380, duration: 5})

})
