import { useState } from 'react';


export const MovieSearchApp = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const API_KEY = 'xxxxxxxxx';

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies();
    };

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th><img src="./src/assets/Movies-app.jpg" /></th>

                    </tr>
                    <tr>
                        <th><form onSubmit={handleSubmit} className="search-form">
                            <input type="text"
                                value={query}
                                onChange={handleInputChange}
                                placeholder="Search movies"
                                className="search-input" />
                            <button type="submit" className="search-button">Search</button>
                        </form></th>
                    </tr>
                </thead>
            </table>





            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                        <h2 className="movie-title">{movie.title}</h2>
                        <p className="movie-release-date">{movie.release_date}</p>
                        <p className="movie-overview">{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
// import { useState } from "react"

// export const MovieSearch = () => {
//     const urlBase = 'https://api.themoviedb.org/3/search/movie'
//     const API_KEY = 'f92a7ba0960776743b34831738bd2b91'

//     const [busqueda, setBusqueda] = useState('')
//     const [peliculas, setPeliculas] = useState([])
//     const handleInputChange = (e) => {
//         setBusqueda(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetchPeliculas()
//     }
//     const fetchPeliculas = async () => {
//         try {

//             const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
//             const data = await response.json()
//             setPeliculas(data)
//         } catch (error) {
//             console.log('Se ha producido un error ', error)

//         }
//     }

//     return (
//         <div className='container'> TMDB
//             <h1 className='title'>Buscador de Películas</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Ingresa una peli"
//                     value={busqueda}
//                     onChange={handleInputChange}
//                 />
//                 <button type='submit' className='search-button'>Buscar</button>
//             </form>
//             <div className='movie-list'>
//                 {peliculas.map((pelicula) => {
//                     <div key={pelicula.id} classNamne='movie-card'>
//                         <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
//                         <h2>{pelicula.title}</h2>
//                         <p>{pelicula.overview}</p>
//                     </div>

//                 })}
//             </div>
//         </div>

//     )
// }
