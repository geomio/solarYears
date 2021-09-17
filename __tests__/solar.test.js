import MainControl from "../src/solar";

describe('MainControl', () => {

  test('MainControl should create a object that holds planet objects with days to rotate around the sun and user object with year age', () => {
    const system = new MainControl();
    system.userData.userName = "jim";
    system.userData.userAgeYears = 25;
    system.planetYears = 20;
    expect(system.userData.userName).toEqual('jim');
    expect(system.userData.userAgeYears).toEqual(25);
    expect(system.solarSystem.mercury).toEqual(87.965);
    expect(system.solarSystem.venus).toEqual(224.475);
    expect(system.solarSystem.earth).toEqual(365);
    expect(system.solarSystem.mars).toEqual(686.565);
    expect(system.solarSystem.jupiter).toEqual(4328.9);
    expect(system.solarSystem.saturn).toEqual(10752.9);
    expect(system.solarSystem.uranus).toEqual(30663.65);
    expect(system.solarSystem.neptune).toEqual(60152);
    expect(system.solarSystem.pluto).toEqual(90736);
    expect(system.solarSystem.eris).toEqual(203670);
    expect()
  });

  test('ageToDays will convert user age to years', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    expect(system.userData.userAgeDays).toEqual(9125);
  });

  test('mercuryDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.mercuryDivide();
    expect(system.planetYears).toEqual("103.7344");
  });

  test('venusDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.venusDivide();
    expect(system.planetYears).toEqual("40.6504");
  });

  test('earthDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.earthDivide();
    expect(system.planetYears).toEqual("25.0000");
  });

  test('marsDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.marsDivide();
    expect(system.planetYears).toEqual("13.2908");
  });

  test('jupiterDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.jupiterDivide();
    expect(system.planetYears).toEqual("2.1079");
  });

  test('saturnDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.saturnDivide();
    expect(system.planetYears).toEqual("0.8486");
  });

  test('uranusDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.uranusDivide();
    expect(system.planetYears).toEqual("0.2976");
  });

  test('neptuneDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.neptuneDivide();
    expect(system.planetYears).toEqual("0");
  });

});
