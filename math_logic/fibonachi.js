class Fibonachi{

    constructor(){

    }

    calculateFibonachiValue(number){

        var s=0;
        if(number===0){
            
            return s;
        
        }if(number===1){
            
            s+=1;
            return s;
        
        }else{
            return (this.calculateFibonachiValue(number-1)+this.calculateFibonachiValue(number-2));
        }

    }

}

module.exports = new Fibonachi(); 