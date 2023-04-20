     /*  
alert("Panelinha vai tomar no cu!!");  
  */

document.querySelector("input").onchange = function() {
  let id = null;
            const elem = document.getElementById("dado");   
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 15);
            function frame() {
              if (pos == 350) {
                clearInterval(id);
              } else {
                pos++; 
                elem.style.rotate = pos + "deg"; 
              }
            }
}