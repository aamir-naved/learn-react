import React, {useId}  from "react";
/*
This code snippet defines a functional component named InputBox, which represents an input field for entering an amount and selecting a currency. Let's break down its structure and functionality:
*/

/*
Defines the InputBox functional component which accepts various props for configuring its behavior and appearance.
*/
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    /*
Handling Props:

Accepts various props to customize the behavior and appearance of the input box component:
label: Specifies the label for the input field.
amount: Represents the value of the amount input field.
onAmountChange: Callback function triggered when the amount input changes.
onCurrencyChange: Callback function triggered when the selected currency changes.
currencyOptions: Array containing the available currency options for the select dropdown.
selectCurrency: Specifies the currently selected currency.
amountDisable: Determines whether the amount input field is disabled.
currencyDisable: Determines whether the currency select dropdown is disabled.
className: Additional CSS classes to apply to the input box container.
    */

    const amountInputId = useId(); // ek unique id aayegi bas.
    /*
Uses the useId hook to generate a unique identifier (amountInputId) for the input field.
This ensures that the input field has a unique id attribute, which is useful for associating labels with form controls and improving accessibility.
    */

/*
Renders an input field for entering an amount and a dropdown select for choosing a currency.
The input field is associated with the generated amountInputId.
The select dropdown is populated with options from the currencyOptions array, with each option representing a currency.
The value and onChange handlers are provided for both the amount input and currency select.
*/
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled = {currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

                >

                   {currencyOptions.map((currency) => (
                    // if want to use loops, key use karna chahiye warna performance degrade hoga
                       <option key={currency} value={currency}>
                           {currency}
                       </option>
                   ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;

/*
Reasoning:
Unique Identifier Generation:

Reasoning: Generating a unique identifier for the input field using the useId hook ensures accessibility by associating labels with form controls.
Effect on Application: Improves the accessibility of the input field by providing a unique identifier that assists screen readers and improves user interaction.
Customization with Props:

Reasoning: Accepting props such as label, amount, currencyOptions, etc., allows the InputBox component to be easily configured and reused across different parts of the application.
Effect on Application: Provides flexibility in configuring the appearance and behavior of the input box component, making it adaptable to various use cases and UI designs.
*/

/*
Explanation of JSX Code:
This JSX code represents the UI structure of the InputBox component, rendering an input field for entering an amount and a select dropdown for choosing a currency. Let's break down its structure:

Container Div:

<div className={bg-white p-3 rounded-lg text-sm flex ${className}}>
This div serves as the container for the entire input box component.
It applies various CSS classes (bg-white, p-3, rounded-lg, text-sm, flex) to style the component's appearance.
The className prop allows additional CSS classes to be added dynamically.
Amount Input Field:

<div className="w-1/2"> ... </div>
This div wraps the label and input field for entering the amount.
<label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
The label element associated with the amount input field using the htmlFor attribute.
Displays the label text specified by the label prop.
<input ... />
The input element for entering the amount.
It has an id attribute set to amountInputId for association with the label.
Various props such as type, placeholder, disabled, value, and onChange are provided to configure its behavior and appearance.
Currency Select Dropdown:

<div className="w-1/2 flex flex-wrap justify-end text-right"> ... </div>
This div wraps the label and select dropdown for choosing the currency.
<p className="text-black/40 mb-2 w-full">Currency Type</p>
A paragraph element displaying the label for the currency select dropdown.
<select ... >
The select element representing the dropdown for selecting a currency.
It is populated with options generated from the currencyOptions array provided as a prop.
The value attribute is set to selectCurrency, which determines the currently selected currency.
The disabled attribute controls whether the dropdown is disabled based on the currencyDisable prop.
An onChange event handler is provided to trigger the onCurrencyChange callback when the selected currency changes.
Reasoning:
Structuring UI Components:

Reasoning: Organizing UI elements into distinct sections (Amount Input Field and Currency Select Dropdown) within container divs improves readability and maintainability.
Effect on Application: Enhances code organization and facilitates easier comprehension and modification of the component's structure and layout.
Accessibility with Labels:

Reasoning: Associating the input field with its corresponding label using the htmlFor attribute ensures accessibility by providing a clear label for screen readers and improving usability for users.
Effect on Application: Enhances accessibility and user experience by making it easier for users, including those with disabilities, to understand the purpose of the input field and interact with it effectively.
*/