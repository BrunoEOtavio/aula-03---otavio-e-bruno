let VariavelA = 0
let VariavelB = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        VariavelA += 1
        basic.showString("A=" + VariavelA)
    }
    if (input.buttonIsPressed(Button.B)) {
        VariavelB += 2
        basic.showString("B=" + VariavelB)
    }
})
