var obj, sec,min,hour,min_rotate,hour_rotate, sec_rotate;
function clock()
 {
    obj= new Date();
    sec= obj.getSeconds();
    min=obj.getMinutes();
    hour=obj.getHours();
    sec_rotate=sec*6;
  document.getElementById('seci').style.transform="rotate("+sec_rotate+"deg)";
         min_rotate=min*6;
  document.getElementById('mini').style.transform="rotate("+min_rotate+"deg)";
         hour_rotate=hour*30+min_rotate/12;
  document.getElementById('houri').style.transform="rotate("+hour_rotate+"deg)";
document.getElementById('h').innerHTML=hour;
document.getElementById('m').innerHTML=min;
document.getElementById('s').innerHTML=sec;
 }
setInterval(clock,1000);
