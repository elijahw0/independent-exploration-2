// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function updateTime() {
  
  time++;
  
 
  counterElement.textContent = time;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);




