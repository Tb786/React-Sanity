import { useEffect, useState } from "react";
import { getMovie } from "../lib/services/movieService";

export default function ActorName() {
    const [movies, setMovies] = useState(null);
	
	useEffect(() => {
		const getData = async () => {
			const movies = await getMovie()
			console.log(movies);
			setMovies(movies)
			
		}
		getData()
	}, [])

    return(
        <>
            {movies?.map((movie) => (
				<article key={movie._id}>
					<p>{movie.actor} - {movie.title}</p>
				</article>	
			))}
        </>
    )
}