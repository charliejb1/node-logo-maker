class HREmployee {
    constructor(name, id, position){

    }
    hire(){
        //proces to hire
    }
    approveTimeOff(){

    }

    rejectTimeOff(){

    }

}

class HRManager extends HREmployee {
    consturcotr(name,id,position, securityClearance){
        super(name,id,postion)
        this.securityClearance = securityClearance
    }
    fire(){
        //fire people
    }
}