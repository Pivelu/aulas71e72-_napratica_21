input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
})
basic.forever(function () {
	
})
