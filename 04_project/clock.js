function clockTimer() {
    const digitalClock = document.querySelector(".digital-clock")

    const now = new Date()
    const hour = (now.getHours()  % 12)
    const minute = now.getMinutes()
    const second = now.getSeconds()

    const newHour =  hour.toString().padStart(2, "0")
    const newMinute = minute.toString().padStart(2, "0")
    const newSecond = second.toString().padStart(2, "0")

    digitalClock.textContent = `${newHour} : ${newMinute} : ${newSecond}`
    
}
clockTimer()
setInterval(clockTimer, 1000)


 