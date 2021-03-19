// const strips = [...document.querySelectorAll(".strip")];
// const numberSize = "5"; // in rem

// // highlight number i on strip s for 1 second
// function highlight(strip, d) {
//   strips[strip]
//     .querySelector(`.number:nth-of-type(${d + 1})`)
//     .classList.add("pop");

//   setTimeout(() => {
//     strips[strip]
//       .querySelector(`.number:nth-of-type(${d + 1})`)
//       .classList.remove("pop");
//   }, 950); // causes ticking
// }

// function stripSlider(strip, number) {
//   let d1 = Math.floor(number / 10);
//   let d2 = number % 10;

//   strips[strip].style.transform = `translateY(${d1 * -numberSize}vmin)`;
//   highlight(strip, d1);
//   strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
//   highlight(strip + 1, d2);
// }

// setInterval(() => {
//   // get new time
//   const time = new Date();

//   // get h,m,s
//   const hours = time.getHours();
//   const mins = time.getMinutes();
//   const secs = time.getSeconds();

//   // slide strips
//   stripSlider(0, hours);
//   stripSlider(2, mins);
//   stripSlider(4, secs);

//   // highlight numbers
// }, 1000);


// console.clear();

document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else

    element.classList.add(stringClass);
  };

  init();
})();

var form = document.getElementById("my-form");

    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    status.classList.add('success');
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add('error');
  });
}
form.addEventListener("submit", handleSubmit)
