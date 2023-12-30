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
        left : dets.x-80,
        top : dets.y-60
    })
})