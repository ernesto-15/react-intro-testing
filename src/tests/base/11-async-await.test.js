import { getImagen } from '../../base/11-async-await';

describe('tests in 11-async-await', () => {
  test('should return an url', async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes('https://')).toBe(true);
  });
});
