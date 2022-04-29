import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// let docOne:HasFormatter
// let docTwo:HasFormatter
// docOne=new Invoice('Jon','work on web',500)
// console.log(docOne);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const details = document.querySelector("#details");
const toFrom = document.querySelector("#tofrom");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
