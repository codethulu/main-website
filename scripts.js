window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("contactButton").style.opacity = "0%"; 

  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    // document.getElementById("header").style.padding = "0px";    
    // document.getElementById("header").style.opacity = "50%";   
    // document.getElementById("header").style.fontSize = "20px";   
    
    document.getElementById("contactButtonA").style.opacity = "0%"; 
    document.getElementById("contactButtonB").style.opacity = "90%"; 


  } else {
    // document.getElementById("header").style.padding = "5px";
    // document.getElementById("header").style.opacity = "100%"; 
    // document.getElementById("header").style.fontSize = "40px";      

    document.getElementById("contactButtonB").style.opacity = "0%"; 
    document.getElementById("contactButtonA").style.opacity = "100%"; 
 
  }
}