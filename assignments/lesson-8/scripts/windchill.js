let h= parseFloat(document.getElementById("high").innerHTML);
let l= parseFloat(document.getElementById("low").innerHTML);
let w= parseFloat(document.getElementById("wind").innerHTML);
let avetemp=(h+l)/2;
let se= Math.pow(w, 0.16);
let f= 35.74 + 0.6215*(avetemp)-35.75*(se)+ 0.4275*(avetemp)*(se);
document.getElementById("windchill").innerHTML =Math.round(f);