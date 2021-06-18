var reasons = [ "Mother",
 "Sister",
 "Baby Sister",
 
];


var images = [ "https://bit.ly/3gx1vmA","https://bit.ly/3zqAEBo","https://bit.ly/3xlDLbN" 
];


var i=0;
 function nextslide(){
   document.getElementById("reasontext").innerHTML=reasons[i];
   
   document.getElementById("album").
   src=images[i];
   i++;
   
   
 }
 