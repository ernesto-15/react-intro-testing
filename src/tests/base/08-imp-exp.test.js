const { getHeroeById, getHeroesByOwner } = require('../../base/08-imp-exp');
import heroes from '../../data/herores';

describe('tests en 02-imp-exp', () => {
  test('should retunr a hero', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((hero) => hero.id === id);
    expect(hero).toEqual(heroData);
  });

  test('should retunr undefined if hero does not exists', () => {
    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });

  test('should retunr a DC hero', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    const heroData = heroes.filter((hero) => hero.owner === owner);
    expect(hero).toEqual(heroData);
  });

  test('should retunr a Marvel hero', () => {
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(2);
  });

  test('should retunr an empty array if owner does not exist', () => {
    const owner = 'dodododo';
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(0);
  });
});
