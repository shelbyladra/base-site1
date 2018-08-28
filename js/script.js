document.addEventListener("DOMContentLoaded", function() {

    //console.log("hi");
    // TOGGLE MENU NAV
     var menubutton = document.querySelectorAll(".menu-button");
     var i;
    for (i = 0; i <menubutton.length; i++) {
        menubutton[i].onclick = function() {
            //console.log(menubutton);
             this.classList.toggle("expanded");
         };
     }
});