function init() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(debts){
    crsr.style.left = debts.x+ "px"
    crsr.style.top = debts.y+ "px"
})

// var crsr1 = document.querySelector(".cursor-video")
// var main = document.querySelector(".page1 video")
// main.addEventListener("mousemove", function(debts){
//     crsr1.style.left = debts.x+ "px"
//     crsr1.style.top = debts.y+ "px"
//     // console.log(debts)
// })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:2
    }
})

tl.to(".page1 h1",{
    x:-85,
    duration:1,
},"anim")

tl.to(".page1 h2",{
    x: 130
},"anim")

tl.to(".page1 video",{
    width: "90%"
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -75%",
        end:"top 120%",
        scrub:2
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -440%",
        end:"top -450%",
        scrub:2
    }
})

tl3.to(".main",{
    backgroundColor: "#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        // console.log(att)
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "15px"
        crsr.style.height = "15px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
var text = document.querySelectorAll("#purple h1")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
        text.forEach(h1 => {
             h1.textContent = elem.textContent.trim();
        })
        // console.log(elem.textContent.trim());
        // gsap.to("#purple h1",{
        //     transform: 'translateX(-100%)',
        //     duration:1,
        //     repeat: 200,
        //     ease:"none"
        // })
    })
    elem.addEventListener("mouseleave", function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})


