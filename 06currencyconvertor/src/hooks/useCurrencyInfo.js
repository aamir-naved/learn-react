import { useEffect, useState } from "react";
/*
This code snippet defines a custom hook named useCurrencyInfo, which is responsible for fetching currency information based on the provided currency code. Let's break down its structure and functionality:
*/
function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    /*
Initializes state variable data using the useState hook to store currency information fetched from the API.
Utilizes the useEffect hook to perform side effects, such as fetching data, when the currency dependency changes.
    */
    useEffect(() => {
        if (!currency) return;

        let newUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(newUrl)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data

    /*
Checks if the currency value is falsy. If so, the hook returns early.
Constructs the URL to fetch currency information based on the provided currency code.
Performs a fetch request to the constructed URL to retrieve the currency information.
Upon receiving the response, converts it to JSON format and updates the data state with the fetched currency information.
    */
}

// // we are returning the whole method.
export default useCurrencyInfo;

/*
Reasoning:
Custom Hook:

Reasoning: Creating a custom hook (useCurrencyInfo) encapsulates currency-related logic and side effects, promoting code reuse and separation of concerns.
Effect on Application: Allows components to easily fetch currency information without duplicating fetching logic across multiple components.
State Management and Effect:

Reasoning: Using the useState hook to manage the currency information (data) and the useEffect hook to fetch data ensures that the component is updated with the latest currency information when the currency code changes.
Effect on Application: Ensures that the fetched currency information is up-to-date and reflects changes in the selected currency code.
Fetching Currency Information:

Reasoning: Performing a fetch request to retrieve currency information from the API endpoint based on the provided currency code allows the hook to dynamically fetch relevant currency data.
Effect on Application: Provides real-time access to currency information, enabling components to display accurate and updated currency data to users.
*/