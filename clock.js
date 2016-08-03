
//the starting point is to mimic the clock cycle of a cpu
//this is the flow of electricity 2.7 billion times a second
//obviously we can't reproduce that in JS because setTimeout can only run something at most once every 1 ms
module.exports = {
  listeners:[],
  start:function(){
    setTimeout(this.cycle,0);
  },
  cycle:function(){
    var l = this.listeners;
    while(l--){
      this.listeners[l]();
    }

  },
  on:function(fnc){
    this.listeners.push(fnc);
  }
 
};