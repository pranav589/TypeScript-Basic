export class Invoice {
    //readonly client:string //can be accessed from outside the class but cannot be modified
    //private details:string //cannot be accessed from outside the class. Can be only accessed from inside the class
    //public amount:number // can be accessed as well as modified from outside as well as inside the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
