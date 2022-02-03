let index = 0
let Days = 0
let DailySubsY1 = 2940
let DailySubsY2 = 1791
let Y2Subs = 4809029
let Y1Subs = 3033070
let Simulation = 1
basic.forever(function () {
    if (Y1Subs > Y2Subs) {
        Simulation = 0
        basic.showNumber(Days)
    }
})
basic.forever(function () {
    if (Simulation == 1) {
        Y2Subs += DailySubsY2
        Y1Subs += DailySubsY1
        Days += 1
    }
})
basic.forever(function () {
    if (Simulation == 1) {
        basic.pause(200)
        led.plot(index, 2)
        index += 1
        if (index > 6) {
            basic.clearScreen()
            index = -1
        }
    }
})
