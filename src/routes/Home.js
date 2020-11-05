import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies{
      id
      medium_cover_image    
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <>

      {
        loading === true ?
          <h1>Loading...</h1> :
          data.movies.map((m, i) => {
            return <img src={m.medium_cover_image} alt={m.id} key={i} />

          })
      }
    </>
  )
};