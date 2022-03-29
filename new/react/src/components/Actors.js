import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {getMovie } from "../lib/services/movieService"

export default function Actors() {
    
	const [actors, setActors] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const actors = await getMovie()
			console.log(actors);
			setActors(actors);
		}
		getData()
	}, [])

    return(
        <>
        <h2>Actors:</h2>
			{actors?.map((actor) => (
				<article key={actor._id}>
					<Link to=":name">{actor.actor}</Link>
				</article>
			))}
        </>
    )
}