import { useReducer } from 'react'
import { useForm } from '../hooks/useForm'
const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]

        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        //return[...state, action.payload]            
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        //return[...state, action.payload]            
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            return state
    }
}


// console.log(tareaReducer(initialState, agregarTarea))

export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
    const { tarea, formState, onInputChange } = useForm({ tarea: '' })
    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea == '') return
        // console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }
    const finalizarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }
    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload: ''
        }
        dispatch(action)
    }


    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="mb-3">

                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresa Tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>

            </form>
            <hr />
            <ul className='list-group'>
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className='list-group-item d-flex justify-content-between'>
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button className='btn btn-danger'
                                    onClick={() => eliminarTarea(item)}
                                >🗑️</button>
                            </div>
                            {/* {item.finalizada ? ' ✅' : '⛔️'} */}
                        </li>)
                })}
            </ul>
        </>
    )
}
