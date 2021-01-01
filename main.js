// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Feb 12, 2021 00:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    
    let time = `${days} ngày : ${hours} giờ : ${mins} phút : ${secs} giây`;

    document.querySelector('.countdown').innerText = time;
  }
}