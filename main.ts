//% color=#BF0A30 icon="\uf2b9" block="Texas Icons"
namespace texasIcons {

    // Texas Star icon
    //% fixedInstance
    export const TexasStar = images.createImage(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
    `)

    // Longhorn icon
    //% fixedInstance
    export const Longhorn = images.createImage(`
        # . . . #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
    `)

    // Texas Outline icon
    //% fixedInstance
    export const TexasOutline = images.createImage(`
        . # # # .
        # . . . #
        # . # # #
        # . . . .
        . # # # #
    `)

    // Show Texas Star
    //% block="show Texas star"
    export function showTexasStar() {
        basic.showImage(TexasStar)
    }

    // Show Longhorn
    //% block="show Longhorn"
    export function showLonghorn() {
        basic.showImage(Longhorn)
    }

    // Show Texas Outline
    //% block="show Texas outline"
    export function showTexasOutline() {
        basic.showImage(TexasOutline)
    }
}