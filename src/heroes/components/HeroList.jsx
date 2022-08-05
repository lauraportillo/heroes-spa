import React from 'react';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul className="list-group">
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};
