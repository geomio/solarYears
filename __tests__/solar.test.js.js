import MainControl from "../src/solar";

describe('MainControl', () => {

  test('MainControl should create a object that holds planet objects and user year age', () => {
    const system = new MainControl();
    const userData = new UserData('tim', 25);
    expect(system.userData.age).toEqual(25);
  });
});
