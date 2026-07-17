// public/jsthings/index.js

console.log("✅ index.js loaded!");
document.addEventListener("DOMContentLoaded", function () {
    $("#click-me").on("click", function () {
    alert("Clicked with jQuery inside DOMContentLoaded");
  });
});
