import React from "react"
export const Increment = React.memo(({ increment }) => {
    console.log('blablabla')
    return (
        // <button className='btn btn-primary' onClick={increment}>+1</button>
        <button className='btn btn-primary' onClick={() => increment(10)}>+10</button>
    )
}
)
