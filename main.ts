//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

    // Cowboy Hat animation frames
    let cowboyHatFrames: Image[] = [
        images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
# . . . .
. . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
. # . . .
# . . . .`),
        images.createImage(`
. . . . .
. . . . .
. . . . .
. . # . .
# # . . .`),
        images.createImage(`
. . . . .
. . . . .
# . . . .
# . . # .
# # # . .`),
        images.createImage(`
. . . . .
# . . . .
. # . . .
. # . . #
. # # # .`),
        images.createImage(`
# . . . .
. # . . .
. . # . .
. . # . .
# # # # #`),
        images.createImage(`
. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`)
]


    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat() {
        for(let frame of cowboyHatFrames) {
            //control.inBackground(() => scrollIcon(cowboyHatFrames, 150));
            frame.showImage(0)
            basic.pause(150)
        }
    }
 
}