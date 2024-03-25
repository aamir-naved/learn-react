import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        if (!currency) return;

        let newUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(newUrl)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

// // we are returning the whole method.
export default useCurrencyInfo;