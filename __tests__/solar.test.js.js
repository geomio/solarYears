import SolarSystem from "../src/solar";

describe('SolarSystem', () => {

  test('Solar System should create a object that holds planet objects', () => {
    const system = new SolarSystem();
    expect(system).toEqual(3);
  });
});
