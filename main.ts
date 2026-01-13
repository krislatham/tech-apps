//% color=#BF5700 icon="\uf005" block="Texas Icons"
namespace texasIcons {

    //% block="Cowboy Hat Icon"
    export function scrollCowboyHat() {
        for (let img of texasIcons.getCowboyHatFrames()) {
            img.showImage(0)
            basic.pause(150)
        }
    }

    //% block="Longhorn Icon"
    export function scrollLonghorn() {
        for (let img of texasIcons.getLonghornFrames()) {
            img.showImage(0)
            basic.pause(150)
        }
    }
}