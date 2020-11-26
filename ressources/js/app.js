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

function initFireflies(fireflies) {
  var total = 20,
    container = fireflies,
    w = fireflies.offsetWidth,
    h = fireflies.offsetHeight,
    Tweens = [],
    SPs = 1;

  for (var i = total; i--;) {
    var Div = document.createElement('div');
    TweenLite.set(Div, {
      attr: {
        class: 'dot'
      },
      x: R(w),
      y: R(h),
      opacity: 0
    });
    container.appendChild(Div);
    Anim(Div);
    Tweens.push(Div);
  };

  function Anim(elm) {
    elm.Tween = TweenLite.to(elm, R(20) + 25, {
      bezier: {
        values: [{
          x: R(w),
          y: R(h)
        }, {
          x: R(w),
          y: R(h)
        }]
      },
      opacity: R(1.5),
      scale: R(1.5) + 0.5,
      delay: R(2),
      onComplete: Anim,
      onCompleteParams: [elm]
    })
  };

  for (var i = total; i--;) {
    Tweens[i].Tween.play()
  };

  function R(max) {
    return Math.random() * max
  };
}

var fireflies = document.getElementById("fireflies");
if(fireflies) initFireflies(fireflies);

//Get the button:
const topbutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.classList.add("goToTop");
  } else {
    topbutton.classList.remove("goToTop");
  }
}

// When the user clicks on the button, scroll to the top of the document
function executeScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } else {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.body.scrollHeight; // For Chrome, Firefox, IE and Opera
  }
}