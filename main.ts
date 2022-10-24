let potValue = 0
basic.forever(function () {
    potValue = pins.analogReadPin(AnalogPin.P2)
    if (potValue > 1000) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P0, potValue)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
