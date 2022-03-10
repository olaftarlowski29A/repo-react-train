import { POKE_API_SINGLE } from "../../queries/Queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

const PokeSingle = () => {
  const paramCode = useParams();

  const { loading, error, data } = useQuery(POKE_API_SINGLE, {
    variables: {
      name: paramCode.pokeNameCode,
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
