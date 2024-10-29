let crsr = document.querySelector("#cursor")
let crsrBlur =  document.querySelector("#cursor-blur")
document.addEventListener("mousemove", (dets)=>{
   setTimeout(() => {
     crsr.style.left = dets.x -10 +"px"
   }, 150);
   setTimeout(() => {
     crsr.style.top = dets.y -10 +"px"
   }, 150);
   
   setTimeout(() => {
     crsrBlur.style.left = dets.x- 200 +"px"
   }, 400);
   setTimeout(() => {
     crsrBlur.style.top = dets.y -200 +"px"
   }, 400);
   
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    zIndex:"999999",
    scrollTrigger:{
       trigger:"#nav",
       scroller:"body",
       start:"top -10%",
       end:"top -40%",
       scrub:true,
    }
})

gsap.to("#main", {
    backgroundColor:"rgba(0,0,0)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -50%",
        scrub:2
    }
})

gsap.to("#about-us",{
  y:-70,
  duration:1,
  scrollTrigger:{
    trigger:"page2",
    scroller:"body",
    start:"top -50%",
    end:"top 90%"
  }
})

gsap.from(".colon-left",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:".colon-left",
    scroller:"body",
    start:"top 55%",
    end:"top 46%",
    scrub:4,
  }
})

gsap.from(".colon-right",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:".colon-left",
    scroller:"body",
    start:"top 55%",
    end:"top 46%",
    scrub:4,
  }
})

// gsap.from("#page5 h3",{
//   y:20,
//   x:10,
//   scrollTrigger:{
//     trigger:".#page5 h3",
//     scroller:"body",
//     start:"top 75%",
//     end:"top 50%",
//     scrub:2,
//   }
// })



let navh4 = document.querySelectorAll("#nav h4");
let logo =  document.querySelectorAll("#nav img,#f1 img");
let footer = document.querySelectorAll("#footer h4")

footer.forEach(function(val){
  val.addEventListener("mouseenter", function(){

    crsr.style.scale = 4;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent"

  })
  val.addEventListener("mouseleave", function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid  #97c426";
    crsr.style.backgroundColor = "#97c426"

  })
})

logo.forEach(function(val){
  val.addEventListener("mouseenter", function(){

    crsr.style.scale = 4;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent"

  })
  val.addEventListener("mouseleave", function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid  #97c426";
    crsr.style.backgroundColor = "#97c426"

  })
})
navh4.forEach(function(val){
  val.addEventListener("mouseenter", function(){
    crsr.style.scale = 4;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent"

  })
  val.addEventListener("mouseleave", function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid  #97c426";
    crsr.style.backgroundColor = "#97c426"

  })
})

const changeContent=async()=>{
  let page4P = document.querySelector("#page4 p")
  console.log(page4P)

  setInterval(() => {
    page4P.innerHTML = "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been."
  }, 5000).then((value)=>{

    
    
    
    setInterval(() => {
      page4P.innerHTML= "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close."
    }, 10000);
    
  })
    
  }

// changeContent()