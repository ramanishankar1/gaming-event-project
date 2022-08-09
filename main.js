let timeSelector=document.getElementById('selector')

let swap=document.getElementById('swap');

let start=document.getElementById('start');

let reset=document.getElementById('reset');
function disBtns(){
    swap.disabled=true;
    start.disabled=true;
    reset.disabled=true;

}

disBtns()
let timerA=document.getElementById('timer-A')
let timerB=document.getElementById('timer-B')
let minA=document.getElementById('min-A')
let secA=document.getElementById('sec-A')
let minB=document.getElementById('min-B')
let secB=document.getElementById('sec-B')
function getTime(){
    let period=timeSelector.value;
    if(period==0)
    {
        disBtns();
    }else{
        start.disabled=false;
        timerA.minutes=period;
        timerB.minutes=period;
        minA.innerText=timerA.minutes;
        minB.innerText=timerB.minutes;
        timerA.seconds=00;
        secA.innerText=timerA.seconds;
        timerB.seconds=00;
        secB.innerText=timerB.seconds;
        timerA.isRunning=true;
        timerB.isRunning=false;
    }
    if(timerA.minutes.length>10){
        minA.innerText=timerA.minutes;
    }
     else{
        minA.innerText='0'+timerA.minutes;
        
     }
     secA.innerText='0'+timerA.seconds;

     if(timerB.minutes>10){
        minB.innerText=timerB.minutes;
    }
     else{
        minB.innerText='0'+timerB.minutes;
        
     }
     secB.innerText='0'+timerB.seconds;
}


timeSelector.addEventListener("change",getTime)

function startTimer(){
    swap.disabled=false;
    reset.disabled=false;
    timeSelector.disabled=true;

   

    if(timerA.isRunning==true){
        if(timerA.seconds==0){
            timerA.seconds=60;
            timerA.minutes=timerA.minutes-1 ;
        }
        timerA.seconds--;
       
        if(timerA.minutes>=10){
            minA.innerText=(timerA.minutes);
        }
         else{
            minA.innerText='0'+timerA.minutes;
            
         }
         
         if(timerA.seconds>=10){
            secA.innerText=timerA.seconds;
        }
         else{
            secA.innerText='0'+timerA.seconds;
            
         }
        }
       

    

    if(timerB.isRunning==true){
        if(timerB.seconds==0){
            timerB.seconds=60;
            timerB.minutes=timerB.minutes-1;
        }
        timerB.seconds--;
        
        
        
         if(timerB.minutes>=10){
            minB.innerText=(timerB.minutes);
        }
         else{
            minB.innerText='0'+timerB.minutes;
            
         }

         if(timerB.seconds>=10){
            secB.innerText=timerB.seconds;
        }
         else{
            secB.innerText='0'+timerB.seconds;
            
         }
         
         
    }
     
}    
    
    
    

let t;

function runTimer()
{
    startTimer();
   t= setInterval(startTimer,1000)
}
start.addEventListener('click',runTimer)

function swapTime(){
    timerA.isRunning=!timerA.isRunning;
    timerB.isRunning=!timerB.isRunning;
}

swap.addEventListener('click',swapTime)



function resetTime()
{
   timeSelector.disabled=false; 
   swap.disabled=true; 
   reset.disabled=false;
    clearInterval(t);
    minA.innerText='00';
    secA.innerText='00';
    minB.innerText='00';
    secB.innerText='00';


}
reset.addEventListener('click',resetTime)