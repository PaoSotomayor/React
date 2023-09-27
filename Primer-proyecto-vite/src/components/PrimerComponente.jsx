import './styles/PrimerComp.css'
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso React', 'Youtube', 4, 5000]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: 'Curso Java', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
    return (
        <><h1>Variables en JSX</h1>
            <h4>Variables de Tipo String :</h4> <p>{string}</p>
            <h4>Variables de Tipo number : </h4><p>{number}</p>
            <h4>Variables de Tipo array : </h4><p>{array}</p>
            <h4>Variables de Tipo boolean : </h4><p>{boolean}</p>
            <h4>Variables de Tipo funcion : </h4><p>{funcion()}</p>
            <h4>Variables de Tipo Objeto : </h4><p>{JSON.stringify(objeto)}</p>

        </>
    )
}
