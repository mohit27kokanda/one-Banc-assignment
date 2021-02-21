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
  let a = $(".icon.active");
  a.removeClass("active");
  a = a.parent().next(".icon-item");
  if (a.length == 0) a = $(".icon-item").first();
  a.find(".icon").addClass("active");
}

$(document).ready(function () {
  setInterval(function () {
    updateClass();
  }, x * 2000);
});

var y = 1;

function updateClass1() {
  let b = $(".icon1.active");
  b.removeClass("active");
  b = b.parent().next(".icon-item1");
  if (b.length == 0) b = $(".icon-item1").first();
  b.find(".icon1").addClass("active");
}

$(document).ready(function () {
  setInterval(function () {
    updateClass1();
  }, y * 2000);
});

var z = 1;

function updateClass2() {
  let c = $(".icon2.active");
  c.removeClass("active");
  c = c.parent().next(".icon-item2");
  if (c.length == 0) c = $(".icon-item2").first();
  c.find(".icon2").addClass("active");
}

$(document).ready(function () {
  setInterval(function () {
    updateClass2();
  }, z * 2000);
});

var inputEmailInfo = $("#input-id").value;
var formateEmail = new RegExp(
  "^[a-zA-Z0-9]+[a-zA-Z0-9\\._+\\-]*@(?:[a-zA-Z0-9-\\.])+\\.[a-zA-Z]{2,4}$"
);

$("#submit").onClick(() => {
  if (inputEmailInfo.length == 0 || formateEmail.test(inputEmailInfo) == 0) {
    console.log("email");
    $(".error-msg").addClass("display");
  }
});
