{
    const selectCurrency = document.querySelector(".js-selectCurrency")
    const resultElement = document.querySelector(".js-result")

    const welcome = () => {
        console.log("Hello Dev!");
    }

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.46;
        const rateUSD = 4.01;
        const rateARS = 0.015;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "ARS":
                return amount / rateARS;

        };
    }

    const resetResult = () => {
        selectCurrency.addEventListener("change", () => {
            resultElement.innerHTML = "";
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
        updateResult();
    };

    const updateResult = () => {
        const amountElement = document.querySelector(".js-amount")

        const amount = amountElement.value;
        const currency = selectCurrency.value;
        const result = calculateResult(amount, currency);
        resultElement.innerHTML = ` ${result.toFixed(2)} ${currency}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("submit", onFormSubmit);

        welcome();
        resetResult();
    }

    init();
}