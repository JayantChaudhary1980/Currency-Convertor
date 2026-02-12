import { useEffect, useState } from "react";

// Making a Custom hook. Video 11/35

function useCurrencyInfo(currency){
    /*
    User wants to **call an API automatically when a React component loads (mounts)** instead of calling it manually with `fetch`.

    For this, they should use the `useEffect` hook.`useEffect` runs when the component is mounted (loaded), so the API call can be placed inside it. This makes the API fetch happen automatically without creating a separate function.

    In short:
    Use `useEffect` to trigger API calls on component mount (lifecycle event).
    */

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
        // .then first has a callback... callback k andar hamara ek 'res' aaya hai. Convert this 'res' into json.
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;