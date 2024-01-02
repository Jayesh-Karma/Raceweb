var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursorblur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-200+"px"
    crsrblr.style.top = dets.y-200+"px"
})


var h1all = document.querySelectorAll("nav h1")
h1all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #ff0000"
        crsr.style.backgroundColor = "#ff0000"
    })
})
// document.addEventListener("mousemove",function(dets){
// })

gsap.to("nav",{
    
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
   
    

    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        markers:false,
        start: "top -1%",
        end:"top -16%",
        scrub:1,
        
    }


})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#middle img , #middle #aboutus",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#middle",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from("#cards,.card",{
    scale:0.8,
    opacity:0,
    duration:1.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#middle",
        scroller:"body",
        
        start:"top 60%",
        end:"top 68%",
        scrub:4
    }
})

gsap.from("#colon1",{
    y:-100,
    x:-100,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:100,
    x:100,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 75%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:-20,
    duration:1,
    
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            // markers:true,
            start:"top 55%",
            end:"top 45%",
            scrub:4
        }

})

