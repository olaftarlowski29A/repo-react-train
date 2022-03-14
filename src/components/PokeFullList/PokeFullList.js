import { POKE_API } from "../../queries/Queries";
import { useQuery } from "@apollo/client";
import PokeFullListItem from "../PokeFullListItem/PokeFullListItem";
import styled from "styled-components";
import { useState } from "react";

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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const limitStep = 24;
  const { loading, error, data, fetchMore } = useQuery(POKE_API, {
    variables: { limit: limitStep, offset: 0 },
  });

  const fetchMoreHandler = async () => {
    setIsLoadingMore(true);
    // fetching again with new variables, this case increase limit
    // the offset is required for pagination approach
    await fetchMore({
      variables: {
        // offset: data.pokemons.nextOffset,
        limit: data.pokemons.results.length + limitStep,
      },
    });
    setIsLoadingMore(false);
  };

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
    console.log(data);
    console.log(data.pokemons);
    console.log(data.pokemons.results);
    console.log(data.pokemons.results.length);
    return (
      <div>
        <p>count: {data.pokemons.count}</p>
        <p>next: {data.pokemons.next}</p>
        <p>nextOffset: {data.pokemons.nextOffset}</p>
        <p>length: {data.pokemons.results.length}</p>
        {isLoadingMore ? (
          <p>loading</p>
        ) : (
          <button onClick={fetchMoreHandler}>
            fetch {limitStep} more results
          </button>
        )}
        <FullListWrapper>{dataResults}</FullListWrapper>
      </div>
    );
  }

  return <h3>Data not found</h3>;
};
export default PokeFullList;
