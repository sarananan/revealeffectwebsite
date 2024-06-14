let menu=document.querySelector(".hamburger");
let menulistdata=document.querySelector(".menulist-data");
let subcontent=document.querySelector(".heading-sub-content");
// alert(subcontent)
menu.addEventListener("click",show)
function show(){
    menulistdata.classList.toggle("data1")
}
setTimeout(showing,2000);
function showing(){
    subcontent.classList.toggle("contenttoggle");
}
window.addEventListener("scroll",reveal);
function reveal(){

// let nav=document.querySelector("#head");
// nav.classList.toggle("stricky",window.scrollY<0);

   let a= document.querySelectorAll("section")
//   console.log(a[0].getBoundingClientRect().top)
   for(i=0;i<a.length;i++){
    let windowheight=window.innerHeight;
    let revealtop=a[i].getBoundingClientRect().top;
    revealpoint=150;
    if(revealtop<windowheight-revealtop){
        a[i].classList.add('active');
    }
    else{
        a[i].classList.remove("active");
    }
   }
}
// console.log(document.querySelector("header"))
// window.addEventListener("scroll",togglenav);
// function togglenav(){
//     // document.querySelector("header")
//     let steicky1=document.querySelector("header");
//     steicky1.classList.toggle("stricky",window.screenY > 0)
//     console.log(steicky1)
// }