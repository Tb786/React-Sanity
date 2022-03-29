import { useState, useEffect } from "react"
import { getActors, getMovie } from "../lib/services/movieService"
import { useParams } from 'react-router-dom'

export default function Movies() {

	
	const [movies, setMovies] = useState(null);
	
	useEffect(() => {
		const getData = async () => {
			const movies = await getMovie()
			console.log(movies);
			setMovies(movies)
			
		}
		getData()
	}, [])

	return (
		<div className="flex justify-center items-center h-screen w-screen" >

			<h2>Movies:</h2>
			{movies?.map((movie) => (
				<article key={movie._id}>
					<p>{movie.title}</p>
				</article>
					
			))}

			{/* <button onClick = {getActors} className="rounded bg-orange-400 px-4 py-2 text-white">Movies</button> */}
		</div>
	)

}

