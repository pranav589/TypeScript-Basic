//basic
let name='Jon' // cannot reinitalize with a data type other than string
let isLegit=false
let num=5


//types in function arguments
const area=(dia:number)=>{
    return Math.PI * dia*dia
}
// console.log(area(5));


//Arrays
let names=['Jon',"Jane"]
//names.push(5) ------ wont allow me since the array contains only strings. If it contains only numbers then it wont allow to push other types of data to it.

let mixed=["Jon",'Jane',5,6,false]
// mixed.push('true') ------ it will allow since array contains mixed data types
// mixed.push({}) ------- wont allow because the array doesnt originally have object data type.
// mixed[0]=5 -------- allows since number data type is already present in the array


//Objects
let person={
    firstName:"Jon",
    lastName:"Doe",
    age:30
}
person.firstName='Jane' //allows since that property of obj  has value of string type
//person.lastName=30 ------wont allow since the lastName prop expects string as value
//person.belt='blue' ------ wont allow to add any extra props to the object
// person={
//     firstName:30 ------ wont allow because it expects string
// }


//Explicit types
let chr:string
//chr=90 ---- has to be string
let age:number
let isLogged:boolean

//Explicit Types -Arrays
let ppls: string[]=[] // array will contain only strings
let numbers: number[]=[]


//Union Types
let mixedUp:(string | number | boolean | object)[]=[]
mixedUp.push({})

let uid:string | number //can be used with variables


//Explicit Types-Object
let person1:{
    firstName:string,
    lastName:string,
    age:number
}
// person1={
//     firstName:"Jon"
// } ----- should have all the properties mentioned in person1



//any type (Dynamic type) ----- use wisely ---- use when we dont know what type of data we wil get.
let agee:any=25
agee=true
agee='25'