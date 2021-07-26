window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("contactButtonB").classList.remove("button-active");
    document.getElementById("contactButtonB").classList.add("button-inactive");

  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    document.getElementById("contactButtonB").classList.add("button-active");
    document.getElementById("contactButtonB").classList.remove("button-inactive");
    document.getElementById("contactButtonA").classList.add("button-inactive");
    document.getElementById("contactButtonA").classList.remove("button-active");
  } else {
    document.getElementById("contactButtonA").classList.add("button-active");
    document.getElementById("contactButtonA").classList.remove("button-inactive");
    document.getElementById("contactButtonB").classList.add("button-inactive");
    document.getElementById("contactButtonB").classList.remove("button-active");
  }
}