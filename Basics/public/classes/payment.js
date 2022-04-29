export class Payment {
    //readonly client:string //can be accessed from outside the class but cannot be modified
    //private details:string //cannot be accessed from outside the class. Can be only accessed from inside the class
    //public amount:number // can be accessed as well as modified from outside as well as inside the class
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed ${this.amount} for ${this.details}`;
    }
}
