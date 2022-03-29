import { useState, useEffect } from "react"
import { getActorBySlug } from "../lib/services/movieService"
import { useParams } from 'react-router-dom'

export default function Movies() {
  
  const [hold, setHold] = useState([])
  const {slug} = useParams()
  
  const getData = async () => {
    const actors = await getActorBySlug(slug)
    setHold(actors);
  }
  
  useEffect(() => {
    getData()
  }, [])

  return(
    <div className="flex justify-center items-center h-screen w-screen" >

    <h1>Acterss</h1>
    {hold.map((actorse) => (
      <h1 key={actorse._id}>{actorse.name.current} </h1>
    ))}
  

    {/* <button onClick = {getActors} className="rounded bg-orange-400 px-4 py-2 text-white">Movies</button> */}
    </div>
  )
  
}

