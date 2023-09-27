import { useState } from "react"
export const Contador = () => {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 1)
    }
    return (
        <>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
