// DOM 
const cvbtn = document.querySelector('.cvbtn');
const sendBtn = document.querySelector('.sendBtn');



// Adding events

cvbtn.addEventListener('click', cvMsg);
sendBtn.addEventListener('click', sendMsg);
document.addEventListener("DOMContentLoaded", countDown);


// Functions

function cvMsg(){
    swal("Opps!", "...I'm still working on this!");
}

function sendMsg(e){
    e.preventDefault();
    swal("Opps!", "...I'm still a Noob at this!");
}





function countDown(){

    // Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

}

