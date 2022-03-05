let jeZapnutoHlidani = false
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        Mikado.zapnoutHlidani()
        jeZapnutoHlidani = true
    } else {
        Mikado.vypnoutHlidani()
        jeZapnutoHlidani = false
    }
})
function detekujPohyb (tolerance: number) {
    if (input.acceleration(Dimension.Strength) + tolerance < Mikado.klidovaHodnota() || input.acceleration(Dimension.Strength) - tolerance > Mikado.klidovaHodnota()) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    if (detekujPohyb(100) == true && jeZapnutoHlidani) {
        Mikado.vzbuditHlidace()
    }
})
