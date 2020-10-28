const { retornaArreglo } = require('../../base/07-deses-arr');

describe('tests in 07-deses-arr', () => {
  test('should return an array with an string and a number', () => {
    const [letras, numeros] = retornaArreglo();
    // expect(arr).toEqual(['ABC', 123]);
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');
    expect(numeros).toBe(123);
  });
});
