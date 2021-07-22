window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "0px";    
    document.getElementById("header").style.opacity = "50%";    

  } else {
    document.getElementById("header").style.padding = "5px";
    document.getElementById("header").style.opacity = "100%";    
  }
}