let jeZapnutoHlidani = false
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        Mikado.ZapnoutHlidani()
        jeZapnutoHlidani = true
    } else {
        Mikado.VypnoutHlidani()
        jeZapnutoHlidani = false
    }
})
function detekujPohyb (tolerance: number) {
    if (input.acceleration(Dimension.Strength) + tolerance < Mikado.KlidovaHodnota() || input.acceleration(Dimension.Strength) - tolerance > Mikado.KlidovaHodnota()) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    if (detekujPohyb(100) == true && jeZapnutoHlidani) {
        Mikado.VzbuditHlidace()
    }
})
