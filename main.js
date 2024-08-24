const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#parallax', 
        start: 'top top',
        end: 'bottom top',
        scrub: true, 
    }
});

gsap.utils.toArray('.layer').forEach(layer => {
    const speed = layer.dataset.speed; //accedo al valor del atributo data-speed
    const movement = -(layer.offsetHeight * speed) //altura total del elemento c-p-b
    tl.to(layer, {
        y: movement, 
        ease: "none"
    }, 0) //tiempo de inicio de la animacion en la linea de tiempo
});
