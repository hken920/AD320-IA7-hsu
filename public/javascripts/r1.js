function myFunction() {
    var a = document.getElementById("r1");
    var b = window.getComputedStyle(a).backgroundColor;

    if (b === "rgb(0, 0, 255)") {
      document.getElementById("r1").style.background = "#FF0000";
    }else{
      document.getElementById("r1").style.background = "#0000FF";
    }
}
