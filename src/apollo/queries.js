import { gql } from "@apollo/client";

export const POKE_API = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        name
        image
      }
    }
  }
`;

// export const POKE_API_SINGLE = gql`
//   query pokemon($name: String!) {
//     pokemon(name: $name) {
//       id
//       name
//       height
//       weight
//       types {
//         type {
//           name
//         }
//       }
//       moves {
//         move {
//           name
//         }
//       }
//       sprites {
//         front_default
//       }
//     }
//   }
// `;
// export const POKE_API_SINGLE = gql`
//   query GetSinglePokemon($id: Int!) {
//     pokemon_v2_pokemon_by_pk(id: $id) {
//       id
//       name
      
//     }
//   }
// `;

export const POKE_API_SINGLE = gql`
  query GetSinglePokemon($id: Int!, $offset: Int, $limit: Int) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonmoves(offset: $offset, limit: $limit) {
        id
        pokemon_v2_move {
          id
          name
        }
      }
    }
    pokemon_v2_pokemonsprites_by_pk(id: $id) {
      id
      sprites
    }
  }
`;
