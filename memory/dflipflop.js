
//the thing used to persist state. this is a physical implementation of the electrical engineering machine that stores an electical state
//this should be the only place in the system where state is persisted
module.exports = function DFlipFlop(value){
    this.value = value; 
}