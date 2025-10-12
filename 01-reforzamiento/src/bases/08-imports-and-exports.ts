import { heroes, type Hero, Owner } from '../data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id)
  return hero;
}

console.log(getHeroById(3))

export const getHeroesByOwner = (owner: Owner.DC | Owner.Marvel): Hero[] => heroes.filter((hero) => hero.owner === owner)