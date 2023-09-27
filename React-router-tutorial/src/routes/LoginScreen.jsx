import { useForm } from './hooks/useForm';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';
export const LoginScreen = () => {

    const initialForm = {
        name: '',
        technology: '',
        email: '',
        network: ''
    }
    const { formState, name, technology, email, network, onInputChange } = useForm(initialForm)
    const { setUser } = useContext(UserContext)
    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(formState)
        setUser(formState)
    }


    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="nombre"
                        className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={onInputChange}
                    // onChange={(event) => onInputChange(event)}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="tecnologia"
                        className="form-label">Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        name="technology"
                        value={technology}
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="email"
                        className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label
                        htmlFor="redes"
                        className="form-label">Redes</label>
                    <input
                        type="text"
                        className="form-control"
                        name="network"
                        value={network}
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
            </form>
        </>
    )
}
