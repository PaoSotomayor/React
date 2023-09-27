import { useMemo, useState } from "react"

export const HeavyCalculations = () => {
    const [numbersList, setNumbersList] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const getCalculation = (numbersList) => useMemo(() => {
        console.log('Calculating')
        return numbersList.reduce((a, b) => a * b)
    }, [numbersList])

    const addNumber = () => {
        setNumbersList([...numbersList, numbersList[numbersList.length - 1] + 1])
        console.log(numbersList)

    }

    return (
        <>
            <h6>useMemo</h6>
            <h2>Calculation:</h2>
            <p>{getCalculation(numbersList)}</p>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button className='btn btn-primary' onClick={() => addNumber()}>Add number</button >
        </>
    )
}
