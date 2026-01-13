//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {
const cowboyHatFrame2: string[] = [
`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`,
`. . . . .
. . . . .
. . . . .
# . . . .
. . . . .`,
`. . . . .
. . . . .
. . . . .
. # . . .
# . . . .`,
`. . . . .
. . . . .
. . . . .
. . # . .
# # . . .`,
`. . . . .
. . . . .
# . . . .
# . . # .
# # # . .`,
`. . . . .
# . . . .
. # . . .
. # . . #
. # # # .`,
`# . . . .
. # . . .
. . # . .
. . # . .
# # # # #`,
`. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`,
`# . # . .
. # . # .
. . . . #
. . . . #
# # # # #`,
`. # . # .
# . # . #
. . . . .
. . . . .
# # # # #`,
`. . # . #
. # . # .
# . . . .
# . . . .
# # # # #`,
`. . . # .
. . # . #
. # . . .
. # . . .
# # # # #`,
`. . . . #
. . . # .
. . # . .
. . # . .
# # # # #`,
`. . . . .
. . . . #
. . . # .
# . . # .
. # # # #`,
`. . . . .
. . . . .
. . . . #
. # . . #
. . # # #`,
`. . . . .
. . . . .
. . . . .
. . # . .
. . . # #`,
`. . . . .
. . . . .
. . . . .
. . . # .
. . . . #`,
`. . . . .
. . . . .
. . . . .
. . . . #
. . . . .`,
`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`
]    
    /**
     * Scrolls a icon animation on the micro:bit display.
     * @param frames The array of string frames to display
     * @param delay Time in ms between frames, eg: 150
     */
    //% blockHidden
    export function scrollIcon(frames: string[], delay: number = 150) {
        for (let frame of frames) {
            images.createImage(frame).showImage(0)
            basic.pause(delay)
        }
    }

    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat() {
        control.inBackground(() => scrollIcon(cowboyHatFrame2, 150))
    }
/*
    //% block="Longhorn Icon"
    export function scrollLonghorn() {
        for (let img of longhornFrames) {
            images.createImage(img).showImage(0)
            basic.pause(150)
        }
    }
*/
}