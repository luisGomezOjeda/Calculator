class Display{
  constructor(display_prev,display_current){
   this.display_prev = display_prev;
   this.display_current = display_current;
   this.calculator = new calculator();
   this.type_operator = undefined;
   this.value_prev = ``;
   this.value_current = ``;
   this.sings = {
    add :`<i class="fa-solid fa-plus"></i>`,
    subtract : `<i class="fa-solid fa-minus"></i>`,
    multiply : `<i class="fa-solid fa-xmark"></i>`,
    enhance : `<i class="fa-solid fa-superscript"></i>`,
    root : `<i class="fa-solid fa-square-root-variable"></i>`,
    split : `<i class="fa-solid fa-divide"></i>`,
 
   }
  }
 
    del(){
     this.value_current = this.value_current.toString().slice(0,-1);
     this.toPrintValue();
    }
  
    reset(){
     this.value_current = "";
     this.value_prev = "";
     this.type_operator = undefined;
     this.toPrintValue();
    }
 
    calculate(){
     const valuePrev = parseFloat(this.value_prev);
     const valueCurrent = parseFloat(this.value_current);
 
     if(isNaN(valuePrev) || isNaN(valueCurrent))return;
     this.value_current = this.calculator[this.type_operator](valuePrev,valueCurrent)
    }
 
    compute(type){
     this.type_operator != "same" && this.calculate();
     this.type_operator = type;
     this.value_prev = this.value_current || this.value_prev;
     this.value_current = "";
     this.toPrintValue();
    }
 
    addNumber(num){
     if(num === "." && this.value_current.includes(".")) return;
     this.value_current = this.value_current.toString() + num.toString();
     this.toPrintValue();
    }
    
     toPrintValue(){
      this.display_current.textContent = this.value_current;
      this.display_prev.innerHTML = `${this.value_prev} ${this.sings[this.type_operator] || ""}`;
     }
 }