import { useState } from "react"
import { AgregarTarea } from './components/AgregarTarea';

const Items = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? ' ✅' : ' ❌'}
        </li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: false }])
    }

    let listadoSecciones = [
        { id: 0, nombre: 'Instalaciones necesarias', visto: true },
        { id: 1, nombre: 'Uso de Vite', visto: true },
        { id: 2, nombre: 'Componentes', visto: true },
        { id: 3, nombre: 'Variables en JSX', visto: true },
        { id: 4, nombre: 'Props', visto: true },
        { id: 5, nombre: 'Eventos', visto: true },
        { id: 6, nombre: 'useState', visto: true },
        { id: 7, nombre: 'Redux', visto: false },
        { id: 8, nombre: 'Custom hooks', visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAddTask = (val) => {
        let valor = val.trim()
        if (valor < 1) return
        const envio = {
            id: arreglo.length,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Listado de Temas</h1>
            <AgregarTarea agregarTarea={onAddTask}> </AgregarTarea>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}> </Items>)}
            </ol>

        </>
    )
}
