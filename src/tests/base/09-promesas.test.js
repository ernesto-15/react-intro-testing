const { getHeroeByIdAsync } = require('../../base/09-promesas');
import heroes from '../../data/herores';

describe('tests in 09-promesas', () => {
  test('should return an async hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test('should return an error if hero does not exists', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toEqual(heroes[0]);
        done();
      })
      .catch((err) => {
        expect(err).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
});
