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