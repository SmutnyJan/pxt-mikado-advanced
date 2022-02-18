/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf11b"
namespace Mikado {
    let isGuarding = false

    /**
    * Zapne hlídání
    */
    //% block="Zapni hlídání"

    export function ZapnoutHlidani(): void {
        music.setBuiltInSpeakerEnabled(true)
        basic.pause(2500)
        basic.showIcon(IconNames.Asleep)
        isGuarding = true
    }

    /**
    * Vypne hlídání
    */
    //% block="Vypni hlídání"

    export function VypnoutHlidani(): void {
        music.setBuiltInSpeakerEnabled(false)
        basic.showIcon(IconNames.Happy)
        isGuarding = false

    }

    /**
    * Vrátí klidovou hodnotu senzoru
    */
    //% block="Klidová hodnota"

    export function KlidovaHodnota(): number {
        return 1023
    }

    /**
    * Vzbudí hlídače
    */
    //% block="Vzbuď hlídače"

    export function VzbuditHlidace(): void {
        basic.showIcon(IconNames.Angry)
        soundExpression.sad.playUntilDone()
        if (!(isGuarding)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }

}