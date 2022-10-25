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
            e.target.value = e.target.value.replace(/[^\dA-Z]/gi, '').replace(/(.{4})/g, '$1 ').trim();
        }
        if(inputName== data.expireDateMonth) {
            if(e.target.value < 10 && e.target.value.length==1) {
                return cardPlace.innerText = "0" + e.target.value;
            }
        }
        if(inputName== data.expireDateYear) {
            if(e.target.value < 10 && e.target.value.length==1) {
                return cardPlace.innerText = "0" + e.target.value;
            }
        }
        cardPlace.innerText = e.target.value;
    })
}
fillData(data.name, card.name);
fillData(data.number, card.number);
fillData(data.expireDateMonth, card. expireDateMonth);
fillData(data.expireDateYear, card.expireDateYear);
fillData(data.cvc, card.cvc);

const messageError = (messagePLace, messageText, inputName1, inputName2 ) => {
    messagePLace.innerText = messageText;
    messagePLace.classList.remove("form__error--hiden")
    inputName1 && inputName1.classList.add("form__input--error")
    inputName2 && inputName2.classList.add("form__input--error")

}

const deleteMessageError = (messagePLace, inputName1, inputName2 ) => {
    messagePLace.classList.add("form__error--hiden")
    inputName1.classList.remove("form__input--error")
    inputName2 && inputName2.classList.remove("form__input--error")
}

confirm.addEventListener("click", (e) => {
    e.preventDefault();
    const numbers = /^[0-9]+$/;

    // name
    if(data.name.value === ""){
        messageError(message.name, "Cant't be blank",data.name )
    }else{
        deleteMessageError(message.name, data.name)
    }
    
    // card number
    if(data.number.value === ""){
        messageError(message.number, "Cant't be blank",data.number )
    }else if(+data.number.value.replace(/\s/g, '').match(numbers) && data.number.value.replace(/\s/g, '').length === 16){
        deleteMessageError(message.number, data.number)
    }else if(+data.number.value.replace(/\s/g, '').match(numbers) && data.number.value.replace(/\s/g, '').length !== 16){
        messageError(message.number, "Card number must be 16 digits")
    }
    else{
        messageError(message.number, "Wrong format, numbers only")
    }

    // expire date
    if(data.expireDateMonth.value === "" || data.expireDateYear.value==="") {
        messageError(message.expireDate, "Cant't be blank",data.expireDateMonth, data.expireDateYear )
    }else if(
        data.expireDateMonth.value.match(numbers) && data.expireDateMonth.value >0 && data.expireDateMonth.value <=12
        && data.expireDateYear.value.match(numbers) && data.expireDateYear.value >0 && data.expireDateYear.value <=99
        ){
        deleteMessageError(message.expireDate, data.expireDateMonth, data.expireDateYear)
    }else if(
        (data.expireDateMonth.value.match(numbers) && (data.expireDateMonth.value <=0 || data.expireDateMonth.value >12))
        || 
        (data.expireDateYear.value.match(numbers) && (data.expireDateYear.value <22 || data.expireDateYear.value >99))
        ){
            messageError(message.expireDate, "MM must be between 1-12 and YY between 01-99",data.expireDateMonth, data.expireDateYear )
        }
        else {
            messageError(message.expireDate, "Wrong format, numbers only",data.expireDateMonth, data.expireDateYear )
        }
        
        // cvc
        if(data.cvc.value === "" ){
            messageError(message.cvc, "Cant't be blank",data.cvc )
        }
        else if(data.cvc.value.match(numbers) && data.cvc.value.length !== 3){
            messageError(message.cvc, "CVC must be 3 digits")
        }
        else if(data.cvc.value.match(numbers) && data.cvc.value.length === 3){
            deleteMessageError(message.cvc, data.cvc)
        }else{
            messageError(message.cvc, "Wrong format, numbers only")
        }
    
})