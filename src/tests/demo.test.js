describe('Tests in demo.js', () => {
  test('strings should be the same', () => {
    //Initialization
    const message = 'Hello world';

    //Stimulus
    const message2 = `Hello world`;

    //Observe behavior
    expect(message).toBe(message2); //===
  });

  test('should be false', () => {
    //Initialization
    const message = false;

    //Observe behavior
    expect(message).toBeFalsy(); //===
  });
});
