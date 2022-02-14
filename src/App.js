import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
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
