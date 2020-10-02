/*
Mobile navbar
*/

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");


menuOpen.addEventListener("click", () => { //Open the menu
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active"); //CLose it
});


/*
Reveal on scroll
*/
AOS.init();

/*
Fireflies effect
-
a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/

var fireflies = document.getElementById("fireflies");

var total=20,
    container=fireflies,
    w=fireflies.offsetWidth,
    h=fireflies.offsetHeight,
    Tweens=[],
    SPs=1;

for (var i=total;i--;){ 
	var Div=document.createElement('div');
	TweenLite.set(Div,{attr:{class:'dot'},x:R(w),y:R(h),opacity:0});
	container.appendChild(Div);	Anim(Div);	Tweens.push(Div);
};

function Anim(elm){ 
	elm.Tween=TweenLite.to(elm,R(20)+25,{bezier:{values:[{x:R(w),y:R(h)},{x:R(w),y:R(h)}]},opacity:R(1.5),scale:R(1.5)+0.5,delay:R(2),onComplete:Anim,onCompleteParams:[elm]})
};

for(var i=total;i--;){
  Tweens[i].Tween.play()};

function R(max){return Math.random()*max};

