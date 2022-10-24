const data = {
    name: document.querySelector("#cardholder-name"),
    number: document.querySelector("#card-number"),
    expireDateMonth: document.querySelector("#card-expire-month"),
    expireDateYear: document.querySelector("#card-expire-year"),
    cvc: document.querySelector("#card-cvc")
}

const card ={
    name: document.querySelector(".front-card__fullname"),
    number: document.querySelector(".front-card__number"),
    expireDateMonth: document.querySelector(".front-card__expire-month"),
    expireDateYear: document.querySelector(".front-card__expire-year"),
    cvc: document.querySelector(".back-card__cvc")
}

const message={
    name: document.querySelector("#error-name"),
    number: document.querySelector("#error-number"),
    expireDate: document.querySelector("#error-expire"),
    cvc: document.querySelector("#error-cvc"),
}

console.log(message)

const confirm = document.querySelector(".form__btn");
const form = document.querySelector(".form");

const fillData = (inputName, cardPlace) => {
    inputName.addEventListener("input", (e) => {
        if(e.target.value === " ") return
        if(inputName== data.number) {
            // e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        }
        cardPlace.innerText = e.target.value;
    })
}
fillData(data.name, card.name);
fillData(data.number, card.number); //prideti tarpus po 4 simboliu
fillData(data.expireDateMonth, card. expireDateMonth); //max 12 menesiu, tai 12 maks
fillData(data.expireDateYear, card.expireDateYear); //max 99 metu, tai 99 maks
fillData(data.cvc, card.cvc);

confirm.addEventListener("click", (e) => {
    e.preventDefault();
    const numbers = /^[0-9]+$/;
    // name
    if(data.name.value === ""){
        message.name.classList.remove("form__error--hiden")
    }else{
        message.name.classList.add("form__error--hiden")
    }
    // card number
    if(data.number.value === ""){
        message.number.classList.remove("form__error--hiden")
    }else if(data.number.value.match(numbers) && data.number.value.length === 6){
        console.log("yra suvesti skaiciai card number")
        message.number.innerText="Cant't be blank"
        message.number.classList.add("form__error--hiden")
    }
    else{
        console.log("yra kitu simboliu card number")
        message.number.innerText="Wrong format, numbers only"
        message.number.classList.remove("form__error--hiden")
    }
    // cvc
    if(data.cvc.value === "" ){
        message.cvc.classList.remove("form__error--hiden") 
    }else if(data.cvc.value.match(numbers) && data.cvc.value.length === 3){
        console.log("yra suvesti skaiciai CVC")
        message.cvc.innerText="Cant't be blank"
        message.cvc.classList.add("form__error--hiden")

    }else{
        console.log("yra kitu simboliu CVC")
        message.cvc.innerText="Wrong format, numbers only"
        message.cvc.classList.remove("form__error--hiden")
    }
    // expire date
    if(data.expireDateMonth.value === "" || data.expireDateYear.value==="") {
        message.expireDate.classList.remove("form__error--hiden");
    }else {
        message.expireDate.classList.add("form__error--hiden");
    }
    
})