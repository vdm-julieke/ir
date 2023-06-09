let IRwaarde = 0
let Achteruit = 95
let Vooruit = 94
let Links = 93
let Rechts = 92
let Stop = 37
basic.forever(function () {
    IRwaarde = IR.IR_read()
})
basic.forever(function () {
    if (IRwaarde == Vooruit) {
    	
    }
    if (IRwaarde == Achteruit) {
    	
    }
    if (IRwaarde == Rechts) {
    	
    }
    if (IRwaarde == Links) {
    	
    }
    if (IRwaarde == Stop) {
    	
    }
})
basic.forever(function () {
    if (IRwaarde == Vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (IRwaarde == Achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (IRwaarde == Rechts) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (IRwaarde == Links) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.pause(400)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (IRwaarde == Stop) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
