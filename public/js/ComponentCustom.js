


//console.log(nav.classList);



window.addEventListener('scroll', function(){
    
     document.getElementById("customNav").classList.toggle('active', window.scrollY > 0);
     if (window.scrollY<=0) {
          document.getElementById("customNav").classList.toggle('activeNone', window.scrollY <= 0);  
     }
     
});

