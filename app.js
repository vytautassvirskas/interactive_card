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

const fillData = (inputName, cardPlace) => {
    inputName.addEventListener("input", (e) => {
        cardPlace.innerText = e.target.value;
    })
}
fillData(data.name, card.name);
fillData(data.number, card.number); //prideti tarpus po 4 simboliu
fillData(data.expireDateMonth, card. expireDateMonth); //max 12 menesiu, tai 12 maks
fillData(data.expireDateYear, card.expireDateYear); //max 99 metu, tai 99 maks
fillData(data.cvc, card.cvc);

// data.expireDateMonth.addEventListener("input", (e) => {
//     card.name.innerText = e.target.value;
// })


// data.name.addEventListener("input", (e) => {
//     console.log("e.target.value: ", e.target.value);
//     card.name.innerText = e.target.value;
// })
console.log(data.name)
console.log(card)