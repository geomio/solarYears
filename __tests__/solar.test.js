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

  test('mercuryDivide will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for mercury', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.mercuryDivide();
    expect(system.planetYears).toEqual("103.7344");
    expect(system.userData.mercuryLifeExpect).toEqual("269.7095")
  });

  test('venusDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.venusDivide();
    expect(system.planetYears).toEqual("40.6504");
    expect(system.userData.venusLifeExpect).toEqual("105.6911")
  });

  test('earthDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.earthDivide();
    expect(system.planetYears).toEqual("25.0000");
    expect(system.userData.earthLifeExpect).toEqual("65.0000")

  });

  test('marsDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.marsDivide();
    expect(system.planetYears).toEqual("13.2908");
    expect(system.userData.marsLifeExpect).toEqual("34.5561")
  });

  test('jupiterDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.jupiterDivide();
    expect(system.planetYears).toEqual("2.1079");
    expect(system.userData.jupiterLifeExpect).toEqual("5.4806")
  });

  test('saturnDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.saturnDivide();
    expect(system.planetYears).toEqual("0.8486");
    expect(system.userData.saturnLifeExpect).toEqual("2.2064")
  });

  test('uranusDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.uranusDivide();
    expect(system.planetYears).toEqual("0.2976");
    expect(system.userData.uranusLifeExpect).toEqual("0.7737")
  });

  test('neptuneDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.neptuneDivide();
    expect(system.planetYears).toEqual("0.1517");
    expect(system.userData.neptuneLifeExpect).toEqual("0.3944")
  });

  test('plutoDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.plutoDivide();
    expect(system.planetYears).toEqual("0.1006");
    expect(system.userData.plutoLifeExpect).toEqual("0.2615")
  });

  test('erisDivide will divide userAgeDays to store the result in planetYears', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.erisDivide();
    expect(system.planetYears).toEqual("0.0448");
    expect(system.userData.erisLifeExpect).toEqual("0.1165")
  });

  test('runSelected will run selected divide function and run all at once', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.runSelected();
    system.selector = 1;
    expect(system.userData.mercuryYears).toEqual("103.7344");
    expect(system.userData.mercuryLifeExpect).toEqual("269.7095")
    system.selector = 2;
    expect(system.userData.venusYears).toEqual("40.6504");
    expect(system.userData.venusLifeExpect).toEqual("105.6911")
    system.selector = 3;
    expect(system.userData.earthYears).toEqual("25.0000");
    expect(system.userData.earthLifeExpect).toEqual("65.0000")
    system.selector = 4;
    expect(system.userData.marsYears).toEqual("13.2908");
    expect(system.userData.marsLifeExpect).toEqual("34.5561")
    system.selector = 5;
    expect(system.userData.jupiterYears).toEqual("2.1079");
    expect(system.userData.jupiterLifeExpect).toEqual("5.4806")
    system.selector = 6;
    expect(system.userData.saturnYears).toEqual("0.8486");
    expect(system.userData.saturnLifeExpect).toEqual("2.2064")
    system.selector = 7;
    expect(system.userData.uranusYears).toEqual("0.2976");
    expect(system.userData.uranusLifeExpect).toEqual("0.7737")
    system.selector = 8;
    expect(system.userData.neptuneYears).toEqual("0.1517");
    expect(system.userData.neptuneLifeExpect).toEqual("0.3944")
    system.selector = 9;
    expect(system.userData.plutoYears).toEqual("0.1006");
    expect(system.userData.plutoLifeExpect).toEqual("0.2615")
    system.selector = 10;
    expect(system.userData.erisYears).toEqual("0.0448");
    expect(system.userData.erisLifeExpect).toEqual("0.1165")
  });

  test('runSelected can run all divide functions at once', () => {
    const system = new MainControl();
    system.userData.userAgeYears = 25;
    system.ageToDays();
    system.runSelected();

    system.selector = 11;
    expect(system.userData.mercuryYears).toEqual("103.7344");
    expect(system.userData.mercuryLifeExpect).toEqual("269.7095")
    expect(system.userData.venusYears).toEqual("40.6504");
    expect(system.userData.venusLifeExpect).toEqual("105.6911")
    expect(system.userData.earthYears).toEqual("25.0000");
    expect(system.userData.earthLifeExpect).toEqual("65.0000")
    expect(system.userData.marsYears).toEqual("13.2908");
    expect(system.userData.marsLifeExpect).toEqual("34.5561")
    expect(system.userData.jupiterYears).toEqual("2.1079");
    expect(system.userData.jupiterLifeExpect).toEqual("5.4806")
    expect(system.userData.saturnYears).toEqual("0.8486");
    expect(system.userData.saturnLifeExpect).toEqual("2.2064")
    expect(system.userData.uranusYears).toEqual("0.2976");
    expect(system.userData.uranusLifeExpect).toEqual("0.7737")
    expect(system.userData.neptuneYears).toEqual("0.1517");
    expect(system.userData.neptuneLifeExpect).toEqual("0.3944")
    expect(system.userData.plutoYears).toEqual("0.1006");
    expect(system.userData.plutoLifeExpect).toEqual("0.2615")
    expect(system.userData.erisYears).toEqual("0.0448");
    expect(system.userData.erisLifeExpect).toEqual("0.1165")
  });
});
