'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.141592;
let su4 = -3.141592;
let su5 = 31.5;

let num;

num = "max => "+ Math.max(su1,su2,su3,su4,su5) + "<br/>";
num += "min => "+ Math.min(su1,su2,su3,su4,su5) + "<br/>";
num += "ceil => "+ Math.ceil(su3) + "<br/>";
num += "ceil => "+ Math.ceil(su4) + "<br/>";
num += "floor => "+ Math.floor(su3) + "<br/>";
num += "floor => "+ Math.floor(su4) + "<br/>";
num += "trunc => "+ Math.trunc(su3) + "<br/>";
num += "trunc => "+ Math.trunc(su4) + "<br/>";
num += "1. "+ Math.pow(2,5) + "<br/>";
num += "2. "+ Math.abs(su4) + "<br/>";
num += "3. "+ Math.sqrt(25) + "<br/>";
num += "4. "+ su3.toFixed(2) + "<br/>";
num += "5. "+ Math.random() + "<br/>";
num += "6. "+ (parseInt(Math.random()*10) + 1) + "<br/>";
num += "7. "+ (parseInt(Math.random()*11) + 5) + "<br/>";



demo.innerHTML = num;