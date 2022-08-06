document.getElementById("year").innerHTML = new Date().getFullYear()
const hour = document.getElementById("hour")
const second = document.getElementById("second")
const minute = document.getElementById("minute")
const digital = document.getElementById("digital-clock")


setInterval(() => {
  const date = new Date()
  if (date.getHours() <= 11) {
    hour.style.transform = `rotate(${(date.getHours() - 3) * 30}deg) translate(55%)`
  } else {
    hour.style.transform = `rotate(${(date.getHours() - 3) * 30}deg) translate(55%)`
  }

  minute.style.transform = `rotate(${(date.getMinutes() - 15) * 6}deg) translate(55%)`

  second.style.transform = `rotate(${(date.getSeconds() - 15) * 6}deg) translate(55%)`

  digital.innerHTML = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()} : ${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} : ${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`

}, 1000)