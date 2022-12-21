

panel_one = gsap.utils.toArray('.panel')
panel_two = gsap.utils.toArray('.second-panel')

panel_one.forEach(box => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            markers: true,
            start: "top 85%", 
            end: "top 2%", 
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
            markers: true,
            start: "top 85%", 
            end: "top 2%",
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


