const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started from ${time} seconds...`);
  console.log(`Press "s" anytime to stop the countdown.`);

  const timer = setInterval(() => {
    console.log(time);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  process.stdin.setRawMode(true);
  process.stdin.resume();

  const checkStopKey = () => {
    process.stdin.once("data", (key) => {
      if (key.toString().trim() === "s") {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
        process.exit(0);
      } else {
        setTimeout(checkStopKey, 200);
      }
    });
  };

  checkStopKey();
});
