/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf11b"
namespace Mikado {

    /**
    * Vrátí klidovou hodnotu senzoru
    */
    //% block="Klidová hodnota"

    export function klidovaHodnota(): number {
        return 1023
    }

}