//% weight=0 color=#3CB371 icon="\uf1b9"
namespace FIO5 {
	enum MotorLocation {
		M1 = 0,//% p15,p16
		M2 = 1,//% p14,p13
		M3 = 2,//% p12,p11
		M4 = 3,//% p10,p09
	}	

	enum MotorDir {
		CW = 0,//% p15,p16
		CCW = 1,//% p14,p13
	}	
	
    /** 馬達轉*/
    //% blockId="foreward" block="Set Motor %position|pos %direction|dir %speed|Speed"
    //% blockGap=1 weight=120
    //% speed.min=0 speed.max=1023
    export function motor_fn(pos: MotorLocation, dir: MotorDir, speed: number) {
        let ctrl_0 = 0;
		let ctrl_1 = 0;
          		
		if(dir == MotorDir.CW) {
			ctrl_0 = speed;
			ctrl_1 = 0;
		} else {
			ctrl_0 = 0;
			ctrl_1 = speed;			
		}
		
		if (pos == MotorLocation.M1 ) {
          pins.analogWritePin(AnalogPin.P15, ctrl_0)
          pins.analogWritePin(AnalogPin.P16, ctrl_1)
		} else if ( pos == MotorLocation.M2 ) {
          pins.analogWritePin(AnalogPin.P14, ctrl_0)
          pins.analogWritePin(AnalogPin.P13, ctrl_1)			
		} else if ( pos == MotorLocation.M2 ) {
          pins.analogWritePin(AnalogPin.P12, ctrl_0)
          pins.analogWritePin(AnalogPin.P11, ctrl_1)			
		} else if ( pos == MotorLocation.M2 ) {
          pins.analogWritePin(AnalogPin.P10, ctrl_0)
          pins.analogWritePin(AnalogPin.P9, ctrl_1)			
		}
    }
    /**
    * 左右馬達同時反轉
    */
    //% blockId="backward" block="car backward|speed(0~1023) %power"
    //% blockGap=1  weight=80
    //% power.min=0 power.max=1023
    export function backward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
}
