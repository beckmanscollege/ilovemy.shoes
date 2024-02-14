document.addEventListener("DOMContentLoaded", function() {
  var gifContainer = document.getElementById("gifContainer");
  // Visa GIF
  gifContainer.style.display = "block";
  // Dölj GIF efter 10 sekunder
  setTimeout(function() {
    gifContainer.style.display = "none";
  }, 8200); // 10000 ms = 10 sekunder
});
