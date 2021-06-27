document.getElementById("mobilenavBtn").addEventListener("click", function() {
    document.getElementById("mobilecloseBtn").style["display"]  = "inline-block";
    document.getElementById("mobilenavBtn").style["display"]  = "none";
    document.getElementById("mobile-scroll-bar-container").style["transform"]  = "translateY(0)";
  }); 

  document.getElementById("mobilecloseBtn").addEventListener("click", function() {
    document.getElementById("mobilenavBtn").style["display"]  = "inline-block";
    document.getElementById("mobilecloseBtn").style["display"]  = "none";
    document.getElementById("mobile-scroll-bar-container").style["transform"]  = "translateY(-300vh)";
  });  
