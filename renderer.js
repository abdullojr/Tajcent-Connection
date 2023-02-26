//  In this script you should take elements and add kind of windows functions to them

const minimize = document.getElementById("minimize");
const maximize = document.getElementById("maximize");
const close = document.getElementById("close");

minimize.addEventListener("click", () => {
  window.api.minimize();
});

maximize.addEventListener("click", () => {
  window.api.maximize();
});

close.addEventListener("click", () => {
  window.api.close();
});
