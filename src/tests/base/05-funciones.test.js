const { getUser, getUsuarioActivo } = require('../../base/05-funciones');

describe('tests in 05-funciones', () => {
  test('should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('should return an object with a name', () => {
    const name = 'Ernesto';

    const userTest = {
      uid: 'ABC567',
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest);
  });
});
