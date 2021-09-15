import SolarSystem from "../src/solar";

describe('SolarSystem', () => {

  test('Solar System should create a object that holds planet objects', () => {
    const system = new SolarSystem(['text line one', 'text line 2', 'text line 3']);
    expect(system).toEqual(3);
  });
});
