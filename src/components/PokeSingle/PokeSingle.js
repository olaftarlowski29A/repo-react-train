
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import PokeSingleItem from "../PokeSingleItem/PokeSingleItem";
import { POKE_API_SINGLE } from "../../apollo/queries";

const PokeSingle = () => {
  const paramCode = useParams();

  const { loading, error, data } = useQuery(POKE_API_SINGLE, {
    variables: {
      id: paramCode.pokeNameCode,
      offset: 0,
      limit: 10,
      
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    console.log(data.pokemon_v2_pokemon_by_pk);
    console.log(data.pokemon_v2_pokemonsprites_by_pk);
    // return <div>dziaua</div>
    let pokeData = data.pokemon_v2_pokemon_by_pk;
    let imgData = data.pokemon_v2_pokemonsprites_by_pk;
    
    return <PokeSingleItem pokeData={pokeData} imgData={imgData}/>;
  }

  return <h2>No results</h2>;
};

export default PokeSingle;
