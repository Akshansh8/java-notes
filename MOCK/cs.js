var but = document.querySelector("#butt")
var m = document.querySelector(".main")
var pa = document.querySelectorAll(".p")
var sh = document.querySelector(".show")
var he = document.querySelectorAll(".heading")
var  flag= 0;
but.addEventListener("click",function(){
   if(flag == 0){
       but.src = "https://cdn.icon-icons.com/icons2/32/PNG/96/moon_night_midnight_2768.png"
       m.style.backgroundColor = "black"
    //    m.style.color = "white"
      for(var i =0;i<pa.length;i++){
        pa[i].style.color = "gray"
        console.log("gii")
      }
    //    alert("mai raatri me badal jauga chalega aapko")
   for(var i = 0;i<he.length;i++){
      he[i].style.color = "White";
      console.log("hello")
   }
   
       flag = 1;
     
   }
   else{
    but.src = "https://cdn.icon-icons.com/icons2/8/PNG/96/sunrise_sun_sunny_shower_showers_sunny_cloudy_fog_day_time_1458.png"
    m.style.backgroundColor = "white"
    m.style.color = "black"
    // pa.style.color  = "gray"
    // alert("mai ujjala me badal jauga chalega aapko")
    flag = 0;
   }
})
var fl = 0;
sh.addEventListener("click",function(){
    if(fl == 0){
        pa.style.display = "none"
        sh.style.backgroundColor = "green"
        sh.textContent = "sshow"
        fl = 1;
    }
    else{
        pa.style.display = "block"
        sh.style.backgroundColor = "red"
        sh.textContent = "hide"
        fl = 0;
    }    
})