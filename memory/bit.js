/// <summary>
/// 
/// the load and input should not be maintained as properties becauses a Bit does not maintain state, only the flip flop does
/// maintaining the flip flop as a property denotes that the flip flop is part of the hardware of the Bit chip
/// </summary>
import DFlipFlop from './dflipflop';
import gates from './gates';
module.exports = Bit;

function Bit(){
    this.flipFlop = new DFlipFlop();
}
Bit.prototype.cycle = function(input,load){
    var output = gates.mux(this.flipFlop.value, input, load);
    flipFlop.Value = output;
    return output;
}