
const video = document.getElementById("videoplay"); /* getElementById = to find the video in my HTML */
const buttons = document.querySelectorAll(".timestamp-btn"); /* Finds all buttons with class ".timestamp.btn*/

buttons.forEach(button => { /* forEach = the code is repeated for each variable (button?) that I have*/
  button.addEventListener("click", () => { /* Awaiting user interaction*/
    const time = Number(button.dataset.time); /*The button's "data-time" value is turned into a number*/
    video.currentTime = time; /* moves the video to the selected timestamp */
    video.play();
  });

});