import { useContext } from "react"
import { UserContext } from './context/UserContext';

export const HomeScreen = () => {
    const { user } = useContext(UserContext)

    return (

        <table className="container">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tecnología</th>
                    <th scope="col">Email</th>
                    <th scope="col">Redes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{user.name}</th>
                    <td>{user.technology}</td>
                    <td>{user.email}</td>
                    <td>{user.network}</td>
                </tr>

            </tbody>
        </table>

    )
}
