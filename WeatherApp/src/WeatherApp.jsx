import { useState } from "react";

export const WeatherApp = () => {
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = 'xxxx'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }
    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Error: ', error)

        }
    }


    return (
        <div className='container'>
            <div className="cabeceraimg">
                <img src="./src/assets/weather.jpg" />
            </div>


            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder="Ingrese una ciudad"
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (

                    <div>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col"><h1>{dataClima.name}</h1></th>
                                    <th scope="col"><h2>{parseInt(dataClima?.main?.temp - difKelvin)}°C</h2></th>
                                    <th scope="col"></th>
                                    <th scope="col"><img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} /></th>

                                </tr>
                                <tr>
                                    <th scope="col"><h6>Min: {parseInt(dataClima?.main?.temp_min - difKelvin)}°C</h6></th>
                                    <th scope="col"><h2></h2></th>
                                    <th scope="col"><h6>Max: {parseInt(dataClima?.main?.temp_max - difKelvin)}°C</h6></th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>

                        </table>

                        <table class="table">
                            <thead >
                                <tr>
                                    <th scope="col">Sensación térmica:</th>
                                    <th scope="col"></th>
                                    <th scope="col">{parseInt(dataClima?.main?.feels_like - difKelvin)}°C</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Humedad:</th>
                                    <td></td>
                                    <td>{(dataClima?.main?.humidity)}%</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Presión atmosférica:</th>
                                    <td></td>
                                    <td>{(dataClima?.main?.pressure)}hPa</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Viento:</th>
                                    <td></td>
                                    <td>{(dataClima?.wind?.speed)}m/s</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Visibilidad:</th>
                                    <td></td>
                                    <td>{(dataClima?.visibility)}m</td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}
