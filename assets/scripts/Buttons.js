
    const buttons_numbers = document.querySelectorAll(".operators-item");
    const buttons_operations = document.querySelectorAll(".operators-item--operators");
    
    const display_prev = document.getElementById("value-prev");
    const display_current = document.getElementById("value-current");
    
    const display = new Display(display_prev,display_current);
    
    buttons_numbers.forEach(button => {
     button.addEventListener("click",()=>{
       display.addNumber(button.innerHTML);
     });
    });
    
    buttons_operations.forEach(button => {
      button.addEventListener("click", ()=>{
        display.compute(button.value);
      });
    });
    document.addEventListener("DOMContentLoaded", ()=>{
      const button__selector = document.querySelectorAll(".theme-button--selector input");
      const body = document.querySelector("body");
      const color = localStorage.getItem("theme");
  
       if(color === null) {
          localStorage.setItem("theme", "body")
          
          button__selector[0].checked = true
       }
       else{
        body.classList.add(color);
        return (color === "body")
        ? button__selector[0].checked = true
        : (color === "theme_2")
        ? button__selector[1].checked = true
        : button__selector[2].checked = true
       } 
  
  })
  
  document.addEventListener("click",(e)=> {
      const button__selector = document.querySelectorAll(".theme-button--selector input");
      const body = document.querySelector("body");
  
      if(e.target === button__selector[0]){
          localStorage.setItem("theme","body");
  
          body.classList.remove("theme_2");
          body.classList.remove("theme_3");
          body.classList.add("body");
      }
      
      if(e.target == button__selector[1]){
          localStorage.setItem("theme","theme_2");
          
          body.classList.remove("body");
          body.classList.remove("theme_3");
          body.classList.add("theme_2");
  
      }
      if(e.target == button__selector[2]){
          localStorage.setItem("theme","theme_3");
          
          body.classList.remove("body");
          body.classList.remove("theme_2");
          body.classList.add("theme_3");
    }
  })