input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.invert(false)
})
input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.zoom(true)
})
input.onButtonPressed(Button.AB, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.invert(true)
})
input.onButtonPressed(Button.B, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.zoom(false)
})
OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Hello!",
    1
    )
})
