import { Link, Route, Routes } from 'react-router-dom'
import ActorName from './components/ActorName'
import Actors from './components/Actors'
import Movies from './components/Movies'
import Navigation from './components/Navigation'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>

        <Route path="movies">
          <Route index element={<Movies />} />
        </Route>

        <Route path="actors">
          <Route index element={<Actors />} />
          <Route path=":name" element={<ActorName/>} />
        </Route>
  
      </Routes>
      
    </>
  )
}
