
let mytime = document.getElementsByClassName('child1')
let mytimee = document.getElementsByClassName('child2')
let mytimeee = document.getElementsByClassName('child3')

let kri = document.getElementById('b4')
function date(){
let time= new Date();
let hour = time.getHours();
let minutes = time.getMinutes();
let sec = time.getSeconds();

let k5=document.getElementById("k5")
if(hour>12){
    k5.innerText= 'PM'
}
else{
    k5.innerText= 'AM' 
}
if(hour<10){
    hour = "0"+hour;
}
if(minutes<10){
mintues = "0"+ mintues;
}
if(sec<10){
    sec= "0"+sec;
}

if (hour>=6 && hour < 12){
    kri.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
} 
else if (hour>=12 && hour < 15){
    kri.innerText = "LET'S HAVE SOME LUNCH !!"
}
else if (hour>=15 && hour <19){
    kri.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}
else{
    kri.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"


}

 if(hour>12){
    hour= hour-12 ;  
 }
 
 
 let timeZone = ` ${hour} Hour `  
 console.log(timeZone);
 mytime[0].innerHTML=timeZone;

 let timeZn = `${minutes} Min`;
 mytimee[0].innerHTML=timeZn;
 console.log(timeZn);

 let timeZnn = `${sec} Secs`;
 mytimeee[0].innerHTML=timeZnn;
 console.log(timeZnn);

 
}
setInterval(()=> {
    date()
},1000)


let value=document.getElementById('value');
let change=document.getElementById('btn');
change.addEventListener('mouseenter',() =>{
    value.innerText= "Party Time !!"
})

let text = document.getElementById('box3')
let morning = document.getElementById('morning')
let Afternoon = document.getElementById('afternoon')
let even = document.getElementById('evening')
let nig = document.getElementById('sleep')
let i = document.getElementById('b5')
 let w = document.getElementsByClassName('wake')


function callMe(){
    
    let t = new Date();
 let hr= t.getHours();

    if(hr===parseInt(morning.value)){
        i.style.backgroundImage="url(./Component 30 1.jpg)" 
        text.innerText = "GOOD MORNING!! WAKE UP !!"
        w[0].innerHTML=morning.value;
    }
    else if (hr===parseInt(afternoon.value)){
        text.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        i.style.backgroundImage="url(./Afternoon.png)"
         w[1].innerHTML=Afternoon.value;
    }
    else if(hr=== parseInt(even.value)){
        text.innerHTML = "GOOD EVENING !!"
        i.style.backgroundImage="url(./lunch.png)"
             w[2].innerHTML=even.value;
    }
    else if(hr=== parseInt(nig.value)){
        text.innerHTML = " GOOD NIGHT !!"
        i.style.backgroundImage="url(./night1.png)"
         w[3].innerHTML=nig.value;
        
    }

    }
    

    





