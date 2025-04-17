document.addEventListener('DOMContentLoaded', function ()
{
    const form = document.getElementById('tip-calculator-form');
    const billAmount = document.getElementById("bill-total");
    const billWithTaxField = document.getElementById("bill-w-tax");
    const errorMessage = document.getElementById("error-msg");
    const billWithTaxAndTipField = document.getElementById("bill-w-tip-tax");

    const tipSlider = document.getElementById("tip-slider");
    const tipPercent = document.getElementById("tip-percent");
    const tipAmountField = document.getElementById("tip-amount");


    tipPercent.textContent = tipSlider.value + "%";

    function updateCalculations()
    {
        const billValue = parseFloat(billAmount.value);
        const tipValue = parseInt(tipSlider.value);

        if (billAmount.value === "0" || billAmount.value === "")
        {
            errorMessage.textContent = "";
            billWithTaxField.value = "0.00";
            tipAmountField.value = "0.00";
            billWithTaxAndTipField.value = "0.00";
            return;
        }

        if (!isNaN(billValue) && billValue >= 0)
        {
            errorMessage.textContent = "";

            const billWithTax = billValue * 1.11;
            billWithTaxField.value = "$" + billWithTax.toFixed(2);

            const tipAmount = (tipValue / 100) * billValue;
            tipAmountField.value = "$" + tipAmount.toFixed(2);

            const totalBill = billWithTax + tipAmount;
            billWithTaxAndTipField.value = "$" + totalBill.toFixed(2);
        }

        else
        {
            errorMessage.textContent = "Please enter a positive valid number.";
            billWithTaxField.value = "";
            tipAmountField.value = "";
            billWithTaxAndTipField.value = "";
        }
    }

    form.addEventListener('input', function (e)
    {
        if (e.target.id === 'tip-slider')
        {
            tipPercent.textContent = e.target.value + "%";
            e.target.style.setProperty('--thumb-rotate', `${e.target.value}deg`);
        }

        updateCalculations();
    });
});


