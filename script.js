const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoAnimation(){
    let videoContainer = document.querySelector("#video-container")
let playbtn = document.querySelector("#play")

videoContainer.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        opacity : 1,
        scale : 1
    })
})


videoContainer.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        opacity : 0,
        scale : 0
    })
})

videoContainer.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left : dets.x-70,
        top : dets.y-100
    })
})
}

videoAnimation()


function loadingAnimation(){
  
    gsap.from("#page1 h2",{
        y : 100,
        opacity : 0,
        delay : 0.6,
        duration : 0.5,
        stagger : 0.2
    })
    gsap.from("#video-container",{
        scale : 0.9,
        opacity : 0,
        delay : 1.6,
        duration : .6,
    })
}

loadingAnimation()

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
       left:dets.x,
       top : dets.y-240

    })
})


document.querySelectorAll(".child").forEach(element => {
    element.addEventListener("mouseenter", function(){
    
        gsap.to("#cursor",{
            transform: `translate(-50%, 50%) scale(1)`,
           

        })
    })
    element.addEventListener("mouseleave", function(){
    
        gsap.to("#cursor",{
            transform: `translate(-50%, 50%) scale(0)`
        })
    })
});



