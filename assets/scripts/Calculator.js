class calculator{
 add(num1,num2){
  return num1 + num2;
 }
 subtract(num1,num2){
  return num1 - num2;
 }
 multiply(num1,num2){
  return num1 + num2;
 }
 split(num1,num2){
  return num1 / num2;
 }
 enhance(base,exponet){
  return base ** exponet;
 }
 root(exponent,base){
  if(exponent == 2)return Math.sqrt(base);
  else if(exponent == 3)return Math.cbrt(base);
  else alert("en esta calculadora solo se puede sacar la raiz de 2 y 3");
 }
}
