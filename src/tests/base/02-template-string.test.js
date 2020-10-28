import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('tests en 02-template-string', () => {
  test('getSaludo should return hello ernesto', () => {
    const nombre = 'Ernesto';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}!`);
  });

  test('getSaludo should return hello Carlos if no arguments', () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Carlos!`);
  });
});
