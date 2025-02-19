$(document).ready(function () {
  const balloonContainer = $("#balloon-container");
  const pump = $("#pump");

  const balloonAlphabets = [
    "assets/Symbol 10001.png",
    "assets/Symbol 10002.png",
    "assets/Symbol 10003.png",
    "assets/Symbol 10004.png",
    "assets/Symbol 10005.png",
    "assets/Symbol 10006.png"
  ];
  const balloonColors = [
    "assets/Symbol 100001.png",
    "assets/Symbol 100002.png",
    "assets/Symbol 100003.png",
    "assets/Symbol 100004.png",
    "assets/Symbol 100005.png",
    "assets/Symbol 100006.png"
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createBalloon() {
    const balloon = $("<div>").addClass("balloon");
    const pumpRect = pump[0].getBoundingClientRect();
    const size = getRandomInt(100, 150);
    const posX = pumpRect.left + pumpRect.width / 2 - size / 2 - 20;
    const posY = pumpRect.top + pumpRect.height / 2 - size / 2;

    balloon.css({
      width: `${size}px`,
      height: `${size}px`,
      left: `${posX}px`,
      top: `${posY}px`
    });

    const balloonImg = $("<img>")
      .attr("src", balloonColors[getRandomInt(0, balloonColors.length - 1)])
      .attr("alt", "Balloon")
      .css({ width: "100%", height: "100%", position: "absolute" });

    const alphabetImg = $("<img>")
      .attr("src", balloonAlphabets[getRandomInt(0, balloonAlphabets.length - 1)])
      .attr("alt", "Alphabet")
      .addClass("alphabet");

    balloon.append(balloonImg, alphabetImg);
    balloonContainer.append(balloon);

    setTimeout(() => {
      balloon.css({
        transition: "all 10s linear",
        left: `-100px`,
        top: `${getRandomInt(50, 150)}px`
      });
    }, 100);

    balloon.on("click", function () {
      balloon.remove();
      playPopSound();
    });
  }

  function inflateBalloons() {
    createBalloon();
  }

  let popSound = new Audio("assets/slice.mp3.mp3");
  function playPopSound() {
    popSound.currentTime = 0;
    popSound.play();
  }

  pump.on("click", inflateBalloons);
});
