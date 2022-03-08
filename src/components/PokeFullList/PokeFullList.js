import { POKE_API } from "../../queries/Queries";
import { useQuery } from "@apollo/client";
import PokeFullListItem from "../PokeFullListItem/PokeFullListItem";
import styled from "styled-components";

const FullListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PokeFullList = () => {
  const { loading, error, data } = useQuery(POKE_API, {
    variables: { limit: 30, offset: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on loading</p>;
  if (data) {
    const dataResults = data.pokemons.results.map((item) => {
      return (
        <PokeFullListItem
          key={item.id}
          name={item.name}
          id={item.id}
          image={item.image}
        />
      );
    });
    return <FullListWrapper>{dataResults}</FullListWrapper>;
  }

  return <h3>Data not found</h3>;
};
export default PokeFullList;
