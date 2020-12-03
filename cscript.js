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
 var count=0;
 function tog()
 {
switch(count)
{
  case 0:
  document.getElementById('light').style.backgroundColor="#4d4d4d";
  document.getElementById('light').style.textAlign="right";
  document.getElementById('light').style.color="white";
  document.getElementsByClassName('circle')[0].style.backgroundImage="radial-gradient(#4d4d4d,black)";
  count++;
  break;
  case 1:
  document.getElementById('light').style.backgroundColor="#cccccc";
  document.getElementById('light').style.color="#1a1a1a";
  document.getElementById('light').style.textAlign="left";
  document.getElementsByClassName('circle')[0].style.backgroundImage="radial-gradient( black,#4d4d4d)";
  count--;
  break;
}
 }
setInterval(clock,1000);
