//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

    // Cowboy Hat animation frames
    let cowboyHatFrames: Image[] = null

    function getCowboyHatFrames(): Image[] {
        if(!cowboyHatFrames) {
            cowboyHatFrames = [
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
# # # # #`),
        images.createImage(`
. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`),
        images.createImage(`
. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`),
        images.createImage(`
. # . . .
# . # . .
. . . # .
. . . # .
# # # # #`)
            ]
        }
        return cowboyHatFrames
    }


    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat(delay: number = 150) {
        let frames = getCowboyHatFrames()
        for(let frame of frames) {
            //control.inBackground(() => scrollIcon(cowboyHatFrames, 150));
            frame.showImage(0)
            basic.pause(delay)
        }
    }
 
}