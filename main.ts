//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

    // Cowboy Hat animation frames
    const cowboyHatFrames: string[] = [
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
         # # # # #`
    ];

    // Longhorn animation frames
    const longhornFrames: string[] = [
        `. . . . .
         . . . . .
         . . . . .
         . . . . .
         . . . . .`,
        `. # . . .
         # . . . .
         . . . . .
         . . . . .
         . . . . .`,
        `. . # . .
         # # . . .
         . . . . .
         . . . . .
         . . . . .`,
        `. . . # .
         # # # . .
         # . . . .
         . . . . .
         . . . . .`,
        `. . . . #
         . # # # .
         # # . . .
         # . . . .
         . . . . .`,
        `. . . . .
         . . # # #
         # # # . .
         # # . . .
         # . . . .`,
        `. . . . .
         . . . # #
         # # # # .
         # # # . .
         . # . . .`
    ];

    /**
     * Scroll a generic icon animation
     * @param frames Array of string frames
     * @param delay Time in ms between frames
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
        control.inBackground(() => scrollIcon(cowboyHatFrames, 150));
    }

    //% block="Longhorn Icon"
    export function scrollLonghorn() {
        control.inBackground(() => scrollIcon(longhornFrames, 150));
    }
}