const formElement = document.querySelector(".js-form")
const selectCurrency = document.querySelector(".js-selectCurrency")
const convertButton = document.querySelector(".js-convertButton")
const resultElement = document.querySelector(".js-result")
const amountElement = document.querySelector(".js-amount")


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const rateEUR = 4.46;
    const rateUSD = 4.01;
    const rateARS = 0.015;

    const amount = amountElement.value;
    const currency = selectCurrency.value;
    let resultExchange = resultElement.value;

    switch (currency) {
        case "EUR":
            resultExchange = amount / rateEUR;
            break;
        case "USD":
            resultExchange = amount / rateUSD;
            break;
        case "ARS":
            resultExchange = amount / rateARS;
            break;
    };
    resultElement.innerText = ` ${resultExchange.toFixed(2)} ${currency}`;
});


selectCurrency.addEventListener("change", () => {
    resultElement.innerHTML = "";
})