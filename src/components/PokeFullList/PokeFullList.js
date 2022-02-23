import { POKE_API } from "../../queries/Queries";
import { useQuery } from "@apollo/client";

const PokeFullList = () => {
  const { loading, error, data } = useQuery(POKE_API, {
    variables: { limit: 30, offset: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on loading</p>;
  if (data) {
    const dataResults = data.pokemons.results.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          justifyItems: "stretch",
        }}
      >
        {dataResults}
      </div>
    );
  }

  return <h3>Data not found</h3>;
};
export default PokeFullList;
