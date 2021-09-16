import MainControl from "../src/solar";

describe('MainControl', () => {

  test('MainControl should create a object that holds planet objects with days to rotate around the sun and user object with year age', () => {
    const system = new MainControl();
    system.userData.userName = "jim";
    system.userData.userAge = 25;
    console.log(system.userData.userName);
    expect(system.userData.userName).toEqual('jim');
    expect(system.userData.userAge).toEqual(25);
    console.log(system.solarSystem.mercury);
    expect(system.mercury).toEqual(87.965);
  });
});
