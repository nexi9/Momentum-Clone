const time=document.getElementById('time');
const greet=document.getElementById('greet');
const focus=document.getElementById('focus');
const quote=document.getElementById('quote');
const imageBg=document.getElementById('bg');

//time display
var today=new Date();
var hour=today.getHours();
var mins=today.getMinutes();
time.innerHTML=addZero(hour)+":"+addZero(mins);

function addZero(n) {
   return (parseInt(n)<10 ? '0' : '')+n;
}

//Greeting
function setGreeting() {
if (hour < 11) {
    greet.innerText='Good morning';
} else if (hour < 17) {
    greet.innerText='Good afternoon';
} else {
    greet.innerText='Good evening';

setTimeout(setGreeting,1000);
}
}

setGreeting();

//Unsplash api bg
let endpoint = "https://api.unsplash.com/photos/random/?client_id=hljkowFDo2xNbzS2Qcuqn7waQL3NDJPIh7CDqvttBSY";
fetch(endpoint) 
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        imageBg.src=jsonData.urls.regular;

    })
