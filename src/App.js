import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { POKE_API } from '../src/queries/Queries';
import { useQuery } from "@apollo/client";

function App() {
  const {loading, error, data} = useQuery(POKE_API, {
    variables: {limit: 20, offset: 0}
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    const dataResults = data.pokemons.results;
    console.log(dataResults);
  }


  return (
    <div>
      <h1>PokeApp</h1>
      <Link to="/pokemon">button</Link>
      <Link to="/">back</Link>
      <Routes>
        <Route path="/" exact element={<p>route1</p>}></Route>
        <Route path="/pokemon" element={<p>route2 dexx</p>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
