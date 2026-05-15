
const video = document.getElementById("videoplay");
const buttons = document.querySelectorAll(".timestamp-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const time = Number(button.dataset.time);
    video.currentTime = time;
    video.play();
  });

});