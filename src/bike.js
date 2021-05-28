class Bike {

    constructor(){
        this.working = true
    }

    isWorking(){
       return this.working
    }

    reportBroken(){
        this.working = false
    }

    reportFix(){
        this.working = true
    }

}
module.exports = Bike;


