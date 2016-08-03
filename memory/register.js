/***
 * the grouping of bits together to determine how addressing is organized
 * it can be 16 32 or 64 bit
 */
import Bit from './bit';

module.exports = Register16;

function Register16(){
    this.bits = [];
    var l = 16;
    while(l--){
        this.bits[i] = new Bit();
    }
}
Register16.prototype.cycle = function(input,load){
    var currentBits = [];
    for (var i = 0; i < input.length; i++){
        currentBits.push(bits[i].cycle(input[i], load));
    }
    return currentBits;
}