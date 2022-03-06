let jeZapnutoHlidani = false
let akcelerace = 0
let stavDisleje = ""
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        jeZapnutoHlidani = true
    } else {
        jeZapnutoHlidani = false
    }
})
function detekujPohyb (tolerance: number) {
    akcelerace = input.acceleration(Dimension.Strength)
    if (akcelerace + tolerance < Mikado.klidovaHodnota() || akcelerace - tolerance > Mikado.klidovaHodnota()) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    if (detekujPohyb(100) == true && jeZapnutoHlidani && stavDisleje != "nastvany") {
        stavDisleje = "nastvany"
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
    } else if (jeZapnutoHlidani && stavDisleje != "pozor") {
        stavDisleje = "pozor"
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (!(jeZapnutoHlidani) && stavDisleje != "stastny") {
        stavDisleje = "stastny"
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
