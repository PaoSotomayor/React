import { useState } from "react"
import { UserList } from "./components/userList"



export const UserApp = () => {
    const [endPoint, setEndPoint] = useState('users')

    //para cargar API con BOTON (no se usa useEffect)
    const handleFetch = () => {
        setEndPoint('comments')
        // fetchUsers()
    }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])
    return (
        <>
            <h1>Listado de usuarios</h1>
            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Cargar Comentarios</button>
        </>
    )
}
