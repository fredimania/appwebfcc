import React from 'react';
import heroes from './heroes.json';

function Select() {
  // Filtra solo los héroes de DC Comics
  const dcHeroes = heroes.filter(hero => hero.publisher === "DC Comics");

  return (
    <select>
      <option value="" disabled selected>Heroes Dc</option>
      {dcHeroes.map(hero => (
        <option key={hero.superhero} value={hero.superhero}>
          {hero.superhero}
        </option>
      ))}
    </select>
  );
}

export default Select;