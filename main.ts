//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

let cowboyHatFrames: Image[] = [
images.createImage(`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . . . .
. . . . .
. . . . .
# . . . .
. . . . .`),
images.createImage(`. . . . .
. . . . .
. . . . .
. # . . .
# . . . .`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . # . .
# # . . .`),
images.createImage(`. . . . .
. . . . .
# . . . .
# . . # .
# # # . .`),
images.createImage(`. . . . .
# . . . .
. # . . .
. # . . #
. # # # .`),
images.createImage(`# . . . .
. # . . .
. . # . .
. . # . .
# # # # #`),
images.createImage(`. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`),
images.createImage(`# . # . .
. # . # .
. . . . #
. . . . #
# # # # #`),
images.createImage(`. # . # .
# . # . #
. . . . .
. . . . .
# # # # #`),
images.createImage(`. . # . #
. # . # .
# . . . .
# . . . .
# # # # #`),
images.createImage(`. . . # .
. . # . #
. # . . .
. # . . .
# # # # #`),
images.createImage(`. . . . #
. . . # .
. . # . .
. . # . .
# # # # #`),
images.createImage(`. . . . .
. . . . #
. . . # .
# . . # .
. # # # #`),
images.createImage(`. . . . .
. . . . .
. . . . #
. # . . #
. . # # #`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . # . .
. . . # #`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . . # .
. . . . #`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . . . #
. . . . .`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`)
]    

let longhornFrames: Image[] = [
images.createImage(`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`),
images.createImage(`. # . . .
# . . . .
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . # . .
# # . . .
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . . # .
# # # . .
# . . . .
. . . . .
. . . . .`),
images.createImage(`. . . . #
. # # # .
# # . . .
# . . . .
. . . . .`),
images.createImage(`. . . . .
. . # # #
# # # . .
# # . . .
# . . . .`),
images.createImage(`. . . . .
. . . # #
# # # # .
# # # . .
. # . . .`),
images.createImage(`. . . . .
# . . . #
# # # # #
. # # # .
. . # . .`),
images.createImage(`. . . . .
# # . . .
. # # # #
. . # # #
. . . # .`),
images.createImage(`. . . . .
# # # . .
. . # # #
. . . # #
. . . . #`),
images.createImage(`# . . . .
. # # # .
. . . # #
. . . . #
. . . . .`),
images.createImage(`. # . . .
. . # # #
. . . . #
. . . . .
. . . . .`),
images.createImage(`. . # . .
. . . # #
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . . # .
. . . . #
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . . . #
. . . . .
. . . . .
. . . . .
. . . . .`),
images.createImage(`. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`)
]


    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat() {
        for (let img of cowboyHatFrames) {
            img.showImage(0)
            basic.pause(150)
        }
    }

    //% block="Longhorn Icon"
    export function scrollLonghorn() {
        for (let img of longhornFrames) {
            img.showImage(0)
            basic.pause(150)
        }
    }
}