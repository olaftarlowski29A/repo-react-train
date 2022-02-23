import { Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PokeFullList from "./components/PokeFullList/PokeFullList";
import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid palevioletred;
  background-color: #e3350d;
  margin: 1em 2em;
  transition: background-color 0.3s;
  transition-timing-function: ease-out;

  &:hover {
    background: transparent;
  }

  ${(props) =>
    props.backBtn &&
    css`
      background: transparent;
      color: #000;

      &:hover {
        background-color: #e3350d;
      }
    `}
  > a {
    color: #090909;
    font-size: 24px;
    padding: 0.25em 1em;
    display: inline-block;
    text-decoration: none;
  }
`;

function App() {
  return (
    <Container>
      <h1 style={{ fontSize: "2.5em" }}>PokeApp</h1>
      <div>
        <Button>
          <Link to="/pokemon">More</Link>
        </Button>
        <Button backBtn>
          <Link to="/">Back</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" exact element={<PokeFullList></PokeFullList>}></Route>
        <Route
          path="/pokemon"
          element={<p>Future route in progress</p>}
        ></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
