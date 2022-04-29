import {HasFormatter} from '../interfaces/hasFormatter.js'
export class Invoice implements HasFormatter{
    //readonly client:string //can be accessed from outside the class but cannot be modified
    //private details:string //cannot be accessed from outside the class. Can be only accessed from inside the class
    //public amount:number // can be accessed as well as modified from outside as well as inside the class
 
     constructor(readonly client:string, private details:string, public amount:number){}
     format(){
         return `${this.client} owes ${this.amount} for ${this.details}`
     }
 }
