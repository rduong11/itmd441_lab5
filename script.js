const billAmount = document.getElementById("bill-total");
const billWithTaxField = document.getElementById("bill-w-tax");
const errorMessage = document.getElementById("error-msg");
const billWithTaxAndTipField = document.getElementById("bill-w-tip-tax");

const tipSlider = document.getElementById("tip-slider");
const tipPercent = document.getElementById("tip-percent");
const tipAmountField = document.getElementById("tip-amount");


billAmount.addEventListener("input", (e) =>
{
    const value = parseFloat(e.target.value);

    if (!isNaN(value) && value >= 0)
    {
        const billWithTax = value * 1.11;
        billWithTaxField.value = billWithTax.toFixed(2);
        billWithTaxAndTipField.value = billWithTax.toFixed(2);
    }
    else
    {
        errorMessage.textContent = "Please enter a positive valid number."
        billWithTaxField.value = "";
    }
});

tipSlider.addEventListener("change", (e) =>
{
    userTip = e.target.value;
    tipPercent.textContent = userTip;
    const tipAmount = parseFloat(((userTip / 100) * billAmount.value)).toFixed(2);
    tipAmountField.value = tipAmount;
    console.log(billWithTaxField.value);
    console.log(tipAmount);
    console.log(billWithTaxField.value + tipAmountField.value);
    const totalBill = billWithTaxField.value + (tipAmount * 100);
    billWithTaxAndTipField.value = parseFloat(totalBill).toFixed(2);

});
