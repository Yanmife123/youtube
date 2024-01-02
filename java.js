var display = 0;
function myfunction() {
  if (display == 1) {
    document.getElementById("nav").style.display = "block";
    display = 0;
  } else {
    document.getElementById("nav").style.display = "none";
    display = 1;
  }
}
