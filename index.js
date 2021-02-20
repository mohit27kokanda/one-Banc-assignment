var line = document.getElementById("typing");
var txts = [
  "CARDS",
  "PAYMENTS",
  "LOAN",
  "SUPPORT",
  "REWARDS",
  "SAVINGS",
  "INVESTMENTS",
  "FOREX",
  "ANALYTICS",
];
var speed = 100;
console.log("One Banc");
async function typewriter(txt) {
  for (let i = 0; i < txt.length; i++) {
    line.innerHTML += txt.charAt(i);
    await delay(speed);
  }
}

async function reverseTypewriter(txt) {
  for (let i = txt.length; i > 0; i--) {
    line.innerHTML = line.innerHTML.slice(0, -1);
    await delay(speed);
  }
}

async function writeLoop() {
  for (let i = 0; i < txts.length; i++) {
    await typewriter(txts[i]);
    await delay(1000);
    await reverseTypewriter(txts[i]);
    await delay(300);
  }

  writeLoop();
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

writeLoop();

// var line = document.getElementsByClassName(".icon-item");
var x = 1;

function updateClass() {
  let a = document.getElementsByClassName(".icon-item.active");
  a.removeClass("active");
  a = a.parent().next(".icon-item");
  if (a.length == 0) a = document.getElementsByClassName(".icon-item").first();
  a.find(".icon").addClass("active");
}

document.ready(function () {
  setInterval(function () {
    updateClass();
  }, x * 1000);
});
