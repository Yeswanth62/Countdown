const days=document.querySelector('#Days')
const hours=document.querySelector('#Hours')
const mins=document.querySelector('#min')
const sec=document.querySelector('#sec')

function Update(){
    const today=new Date();
const curYear=today.getFullYear();
console.log(curYear)
const newYear=new Date(`January 1,${curYear+1} 00:00:00`);
console.log(newYear);
curDate=new Date();
const diff=newYear-curDate;

 const d=Math.floor(diff/1000/60/60/24);
 const h=Math.floor((diff/1000/60/60)%24);
 const m=Math.floor((diff/1000/60)%60);
 const s=Math.floor((diff/1000)%60);
 days.innerHTML=d<10?"0"+d:d;
 hours.innerHTML=h<10?"0"+h:h
 mins.innerHTML=m<10?"0"+m:m
 sec.innerHTML=s<10?"0"+s:s

 console.log(d+" "+h+" "+m+" "+s);
}

setInterval(Update,1000)