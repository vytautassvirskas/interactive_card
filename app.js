

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

// data.name.addEventListener("input", (e) => {
//     console.log("e.target.value: ", e.target.value);
//     card.name.innerText = e.target.value;
// })

confirm.addEventListener("click", (e) => {
    e.preventDefault();
    data.name.value === "" 
    ? 
    data.name.nextElementSibling.classList.remove("form__error-message--hiden")
    :
    data.name.nextElementSibling.classList.add("form__error-message--hiden")

    data.number.value === "" ?
    data.number.nextElementSibling.classList.remove("form__error-message--hiden")
    :
    data.number.nextElementSibling.classList.add("form__error-message--hiden")

    if(data.expireDateMonth.value === "" || data.expireDateYear.value==="") {
        data.expireDateYear.parentElement.nextElementSibling.classList.remove("form__error-message--hiden");
    }else {
        data.expireDateYear.parentElement.nextElementSibling.classList.add("form__error-message--hiden");
    }
    data.cvc.value === "" 
    ?
    data.cvc.nextElementSibling.classList.remove("form__error-message--hiden") 
    :
    data.cvc.nextElementSibling.classList.add("form__error-message--hiden")

    // form.classList.add("form--hidden");

})