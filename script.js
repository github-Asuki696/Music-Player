TweenMax.set("#ripple-circle circle", {
  scale: 0.5,
  transformOrigin: "50% 50%"
});
TweenMax.fromTo(
  "#svg-line",
  2,
  { x: -2.5 },
  { x: 2.5, repeat: -1, ease: Elastic.easeInOut, yoyo: true }
);
TweenMax.fromTo(
  ".loading-image",
  2,
  { scale: 1, autoAlpha: 1 },
  {
    scale: 0.75,
    autoAlpha: 0.5,
    transformOrigin: "50% 50%",
    ease: Bounce.easeIn,
    yoyo: true,
    repeat: -1
  }
);
TweenMax.to("#inner-circ", 2, {
  rotation: 360,
  transformOrigin: "50% 50%",
  repeat: -1
});
TweenMax.to("#outer-circ", 4, {
  rotation: -360,
  transformOrigin: "50% 50%",
  repeat: -1
});

$(".audiosvg").hover(
  function () {
    hoverCircle = $(this).find("#hover-circle .st4");
    $(hoverCircle).css({ fill: "#7691BA" });
    TweenMax.to(".play-text", 0.35, {
      autoAlpha: 1,
      y: -70,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    });
  },
  function () {
    $(hoverCircle).css({ fill: "#486CA3" });
    TweenMax.to(".play-text", 0.35, {
      autoAlpha: 0,
      y: 0,
      transformOrigin: "50% 50%",
      ease: Back.easeIn
    });
  }
);

$(".audiosvg").click(function () {
  var spinDisc = $(this).find("#svg-audio");
  var rippleCircle = $(this).find("#ripple-circle circle");
  var activeBox = $(this).prev();
  TweenMax.set(spinDisc, { rotation: 0, transformOrigin: "50% 50%" });
  TweenMax.to(spinDisc, 2, {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: Linear.easeNone
  });
  TweenMax.staggerTo(
    rippleCircle,
    2.1,
    {
      scale: 20,
      transformOrigin: "50% 50%",
      autoAlpha: 0,
      repeat: -1,
      ease: Linear.easeNone
    },
    0.7
  );
  $(activeBox).show();
  TweenMax.set(".play-text", {
    autoAlpha: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });
  TweenMax.set(".pause-text", {
    autoAlpha: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });
});

$(".active-box").click(function () {
  $(this).hide();
  TweenMax.killTweensOf($(this).next().find("#svg-audio"));
  TweenMax.killTweensOf($(this).next().find("#ripple-circle circle"));
  TweenMax.set("#ripple-circle circle", {
    scale: 0.5,
    transformOrigin: "50% 50%"
  });
  TweenMax.set(".play-text", {
    autoAlpha: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });
  TweenMax.set(".pause-text", {
    autoAlpha: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });
});

$(".active-box").hover(
  function () {
    hoverCircle = $(this).parent().find("#hover-circle .st4");
    $(hoverCircle).css({ fill: "#7691BA" });
    TweenMax.to(".pause-text", 0.35, {
      autoAlpha: 1,
      y: -70,
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    });
  },
  function () {
    $(hoverCircle).css({ fill: "#486CA3" });
    TweenMax.to(".pause-text", 0.35, {
      autoAlpha: 0,
      y: 0,
      transformOrigin: "50% 50%",
      ease: Back.easeIn
    });
  }
);
// random music
function getRandom(m, n) {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}
const random = document.querySelector(".random-music");
let randomAddress;
const audiosvg = document.querySelector(".audiosvg");
const activeBox = document.querySelector(".active-box");
let audioMp3 = new Audio();
audioMp3.src = "https://cdn.jsdelivr.net/gh/github-Asuki696/music-address/test1.mp3";
// error check
    audioMp3.addEventListener('error',function(){
      if (audioMp3.error) {
      switch (audioMp3.error.code) {
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        console.error(audioMp3.src)
        console.error('The audio source does not exist or the format is not supported. Please change');
        break;
      case MediaError.MEDIA_ERR_NETWORK:
        console.error(audioMp3.src)
        console.error('Network Error. Please change');
        break;
    }
  }
 })
random.addEventListener("click", function() {
  randomAddress = getRandom(1, 8);
  audioMp3.src = `https://cdn.jsdelivr.net/gh/github-Asuki696/music-address/test${randomAddress}.mp3`;
      playAudio();
      activeBox.style.display = "block";
    const spinDisc = document.querySelector("#svg-audio");
    const rippleCircle = document.querySelectorAll("#ripple-circle circle");
    TweenMax.set(spinDisc, { rotation: 0, transformOrigin: "50% 50%" });
    TweenMax.to(spinDisc, 2, {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: Linear.easeNone
    });
    TweenMax.staggerTo(
      rippleCircle,
      2.1,
      {
        scale: 20,
        transformOrigin: "50% 50%",
        autoAlpha: 0,
        repeat: -1,
        ease: Linear.easeNone
      },
      0.7
    );
});

function playAudio() {
  audioMp3.play();
}

function pauseAudio() {
  audioMp3.pause();
}

$(".circles").click(function () {
  TweenMax.to(".socialmedia-overlay", 1, {
    css: { top: 0 },
    ease: Bounce.easeOut
  });
  TweenMax.to(".fa-angle-up", 0.5, {
    autoAlpha: 1,
    ease: Power2.easeOut,
    delay: 1
  });
  TweenMax.staggerFrom(
    ".socialmedia-content div",
    0.5,
    {
      scale: 0.1,
      transformOrigin: "50% 50%",
      autoAlpha: 0,
      ease: Back.easeOut,
      delay: 0.75
    },
    0.5
  );
});
$(".fa-angle-up").click(function () {
  TweenMax.to(".socialmedia-overlay", 0.5, {
    css: { top: "-100%" },
    ease: Power2.easeInOut
  });
  TweenMax.to(this, 0.5, { autoAlpha: 0, ease: Power2.easeOut });
});