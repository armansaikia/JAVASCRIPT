//Ploymorphsim 
//child class invokes parent class method
class RBI{

    rateOfInterest(valueOne, valueTwo){
        return console.log("RBI: ", valueOne, valueTwo)
    }
}

class ICICI extends RBI{

    rateOfInterest(valueOne, valueTwo){
        return console.log("ICICI: ", valueOne, valueTwo)
    }

}

class AXIS extends RBI{

    rateOfInterest(valueOne, valueTwo){
        return console.log("AXIS: ", valueOne, valueTwo)
    }
}

var i = new ICICI()
var a = new AXIS()
i.rateOfInterest(2, "%") //ICICI:  2 %
a.rateOfInterest(3, "%") //AXIS:  3 %