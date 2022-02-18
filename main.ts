let jeZapnutoHlidani = false
function Detekuj_pohyb (tolerance: number) {
    if (input.acceleration(Dimension.Strength) + tolerance < Mikado.KlidovaHodnota() || input.acceleration(Dimension.Strength) - tolerance > Mikado.KlidovaHodnota()) {
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.A, function () {
    if (jeZapnutoHlidani == false) {
        Mikado.ZapnoutHlidani()
        jeZapnutoHlidani = true
    } else {
        Mikado.VypnoutHlidani()
        jeZapnutoHlidani = false
    }
})
basic.forever(function () {
    if (Detekuj_pohyb(100) == true && jeZapnutoHlidani) {
        Mikado.VzbuditHlidace()
    }
})
