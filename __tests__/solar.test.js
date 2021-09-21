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
    expect(system.planetYears).toEqual("0.1517");
  });

  test('plutoDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.plutoDivide();
    expect(system.planetYears).toEqual("0.1006");
  });

  test('erisDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.erisDivide();
    expect(system.planetYears).toEqual("0.0448");
  });

  test('runSelected will run selected divide function', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.runSelected();
    system.selector = 1;
    expect(system.userData.mercuryYears).toEqual("103.7344");
    system.selector = 2;
    expect(system.userData.venusYears).toEqual("40.6504");
    system.selector = 3;
    expect(system.userData.earthYears).toEqual("25.0000");
    system.selector = 4;
    expect(system.userData.marsYears).toEqual("13.2908");
    system.selector = 5;
    expect(system.userData.jupiterYears).toEqual("2.1079");
    system.selector = 6;
    expect(system.userData.saturnYears).toEqual("0.8486");
    system.selector = 7;
    expect(system.userData.uranusYears).toEqual("0.2976");
    system.selector = 8;
    expect(system.userData.neptuneYears).toEqual("0.1517");
    system.selector = 9;
    expect(system.userData.plutoYears).toEqual("0.1006");
    system.selector = 10;
    expect(system.userData.erisYears).toEqual("0.0448");
  });

  // test('doAll should count all planets and add their value', () => {
  //   const system = new MainControl();
  //   system.userData.userAgeYears = 25;
  //   system.ageToDays();
  //   system.doAll();
  //   system.
  //   expect(system.userMarsAge).toEqual("0.0448");
  // });

  // test('lifeSpan should find remaining life span per planet', () => {
  //   const system = new MainControl();
  //   system.userData.userAgeYears = 25;
  //   system.ageToDays();
  //   system.erisDivide();
  //   system.lifeSpan();
  //   expect(system.erisExpected).toEqual("55");
  // });

});
