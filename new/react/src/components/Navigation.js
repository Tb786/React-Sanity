import { Link, NavLink, Route } from "react-router-dom";
import Movies from "./Movies";
import Actors from "./Actors";
import ActorName from "./ActorName";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/movies" element={<Movies/>}>Movies </NavLink>
        </li>
        <li>
          <NavLink to="/actors" element={<Actors/>}>Actors</NavLink>
        </li>
        <li>
          <NavLink to="/actors/:name" element={<ActorName />}>Actors/:name</NavLink>
        </li>
      </ul>
    </nav>
  )
}