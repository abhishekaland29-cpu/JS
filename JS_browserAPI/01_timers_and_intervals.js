// TIMERS AND INTERVALS IN JAVASCRIPT


// 1. SETTIMEOUT AND CLEARTIMEOUT
// Executes a callback function ONCE after a specified delay (in milliseconds).


// Syntax: const timerId = setTimeout(callbackFunction, delayInMs, param1, param2...);

const timerId = setTimeout(() => {
  console.log("This executes after a 2-second delay.");
}, 2000);

// clearTimeout: Cancels a timeout before it executes (requires timer ID)
const stopTimerBtn = document.querySelector("#stop-timer-btn");

if (stopTimerBtn) {
  stopTimerBtn.addEventListener("click", () => {
    clearTimeout(timerId);
    console.log("Timeout execution canceled!");
  });
}



// 2. SETINTERVAL AND CLEARINTERVAL
// Repeatedly executes a callback function at specified time intervals.


// Syntax: const intervalId = setInterval(callbackFunction, intervalInMs);

let counter = 1;

const intervalId = setInterval(() => {
  console.log(`Interval tick #${counter}`);
  counter++;

  // Stop interval condition internally
  if (counter > 5) {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 iterations.");
  }
}, 1000);



// 3. CONFUSION POINT: setInterval vs RECURSIVE setTimeout

// setInterval:
// Schedules execution strictly every N milliseconds, regardless of how long 
// the code inside the callback takes to run. Can lead to overlapping calls if heavy.

// Recursive setTimeout (Alternative & Preferred for variable task durations):
// Guarantees a exact fixed delay BETWEEN executions (execution finishes first, then delay starts).

function recursiveTimer() {
  setTimeout(() => {
    console.log("Recursive timeout task finished.");
    // Conditionally trigger next run:
    // recursiveTimer(); 
  }, 1000);
}

