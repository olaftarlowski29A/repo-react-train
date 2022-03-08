import { POKE_API_SINGLE } from "../../queries/Queries";
import { useQuery } from "@apollo/client";

const PokeSingle = () => {
  const { loading, error, data } = useQuery(POKE_API_SINGLE, {
    variables: {
      name: "pikachu",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    let pokeData = data.pokemon;
    console.log(data);
    return <div>{pokeData.name}</div>;
  }

  return <h2>yo</h2>;
};

export default PokeSingle;
