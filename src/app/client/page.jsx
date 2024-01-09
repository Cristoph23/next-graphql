"use client";

import { gql, useSuspenseQuery } from "@apollo/client";

const query = gql`
  query {
    characters(page: 1) {
      results {
        name
        image
        id
      }
    }
  }
`;

function ClientPage() {
  const { data } = useSuspenseQuery(query);
  console.log(data);

  return (
    <div className="grid grid-cols-4">
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default ClientPage;
