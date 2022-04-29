import {HasFormatter} from '../interfaces/hasFormatter.js'
export class Payment implements HasFormatter{
    //readonly client:string //can be accessed from outside the class but cannot be modified
    //private details:string //cannot be accessed from outside the class. Can be only accessed from inside the class
    //public amount:number // can be accessed as well as modified from outside as well as inside the class
 
     constructor(readonly recepient:string, private details:string, public amount:number){}
     format(){
         return `${this.recepient} is owed ${this.amount} for ${this.details}`
     }
 }
