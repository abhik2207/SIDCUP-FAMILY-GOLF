var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + 20 + "px";
    cursor.style.top = dets.y + 20 + "px";
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #ffffff";
        cursor.style.backgroundColor = "transpaent";
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #bcff03";
        cursor.style.backgroundColor = "#bcff03";
    })
})

gsap.to("#nav",{
    backgroundColor:"#000000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#double-quote1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#double-quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#double-quote2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#double-quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
