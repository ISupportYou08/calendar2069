function playHoliday(name, videoFile) {
  alert("Holiday: " + name);

  // Calendar background video
  let calBg = document.getElementById("calendarBgVideo");
  calBg.src = videoFile;
  calBg.style.display = "block";
  calBg.play();

  // Overlay video
  document.getElementById("overlay").style.display = "flex";
  let video = document.getElementById("holidayVideo");
  document.getElementById("videoSource").src = videoFile;
  video.load();
  video.play();


}

function goBack() {
  // Stop overlay video
  let video = document.getElementById("holidayVideo");
  video.pause();
  video.currentTime = 0;
  document.getElementById("overlay").style.display = "none";

  // Stop calendar background video
  let calBg = document.getElementById("calendarBgVideo");
  calBg.pause();
  calBg.currentTime = 0;
  calBg.style.display = "none";
}
