import { useCallback, useState } from "react"
import { Increment } from "./Inncrement";

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0)
    const incrementParent = useCallback((val) => {
        setCounter(c => c + val)
    }, []

    )

    return (
        <>
            <h6>useCallback y React.memo</h6>
            <h2>Counter: {counter}</h2>
            <Increment increment={incrementParent}></Increment>
        </>
    )
}
