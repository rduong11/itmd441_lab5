const billAmount = document.getElementById("bill-total");
const billWithTaxField = document.getElementById("bill-w-tax");
const errorMessage = document.getElementById("error-msg");

billAmount.addEventListener("input", (e) =>
{
    const value = parseFloat(e.target.value);

    if (!isNaN(value) && value >= 0)
    {
        const billWithTax = value * 1.11;
        billWithTaxField.value = billWithTax.toFixed(2);
    }
    else
    {
        errorMessage.textContent = "Please enter a positive valid number."
        billWithTaxField.value = "";
    }
});

