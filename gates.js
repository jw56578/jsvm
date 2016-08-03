/**
 * The building blocks of a computer
 * 
 */
module.exports = {
    //representing the physical gate as a transistor and the starting point of everything else
    //this should be the only thing that actually has js conditional in it
    nand:function(input1,input2){
        return !(input1 && input2);   
    },
    not:function(input){
        return this.nand(input,input);
    },
    and:function(input1,input2){
        return this.not(this.nand(input1,input2));
    },
    or:function(input1, input2){
        var i1 = this.not(input1);
        var i2 = this.not(input2);
        return this.nand(i1, i2);
    },
    mux:function(input1,input2,select){
        var i1 = this.and(input2, select);
        var notSelect = this.not(select);
        var i2 = this.and(input1, notSelect);
        return this.or(i1, i2);
    }
 

           
        



};