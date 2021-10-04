import MainControl from "../src/maincontrol";

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
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    expect(system.userData.userAgeDays).toEqual(9125);
  });
  test('mercuryDivide will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for mercury', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.mercuryMath();
    expect(system.planetYears).toEqual("103.7344");
    expect(system.userData.mercuryLifeExpect).toEqual("269.7095")
  });
  test('venusMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for venus', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.venusMath();
    expect(system.planetYears).toEqual("40.6504");
    expect(system.userData.venusLifeExpect).toEqual("105.6911")
  });
  test('earthMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for earth', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.earthMath();
    expect(system.planetYears).toEqual("25.0000");
    expect(system.userData.earthLifeExpect).toEqual("65.0000")
  });
  test('marsMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for mars', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.marsMath();
    expect(system.planetYears).toEqual("13.2908");
    expect(system.userData.marsLifeExpect).toEqual("34.5561")
  });
  test('jupiterMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for jupiter', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.jupiterMath();
    expect(system.planetYears).toEqual("2.1079");
    expect(system.userData.jupiterLifeExpect).toEqual("5.4806")
  });
  test('saturnMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for saturn', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.saturnMath();
    expect(system.planetYears).toEqual("0.8486");
    expect(system.userData.saturnLifeExpect).toEqual("2.2064")
  });
  test('uranusMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for uranus', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.uranusMath();
    expect(system.planetYears).toEqual("0.2976");
    expect(system.userData.uranusLifeExpect).toEqual("0.7737")
  });
  test('neptuneMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for neptune', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.neptuneMath();
    expect(system.planetYears).toEqual("0.1517");
    expect(system.userData.neptuneLifeExpect).toEqual("0.3944")
  });
  test('plutoMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for pluto', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.plutoMath();
    expect(system.planetYears).toEqual("0.1006");
    expect(system.userData.plutoLifeExpect).toEqual("0.2615")
  });
  test('erisMath will divide userAgeDays to store the result in planetYears and also calculate life expectancy remaining for eris', () => {
    const userAge = 25
    const system = new MainControl(userAge);
    system.ageToDays();
    system.erisMath();
    expect(system.planetYears).toEqual("0.0448");
    expect(system.userData.erisLifeExpect).toEqual("0.1165")
  });
  test('runSelected will run selected Math function and run all at once', () => {
    const userAge = 25;
    let select = 1;
    const system = new MainControl(userAge, select);
    system.ageToDays();
    system.runSelected();
    console.log(system.userData.mercuryYears);
    expect(system.userData.mercuryYears).toEqual("103.7344");
    expect(system.userData.mercuryLifeExpect).toEqual("269.7095")
    system.selector = 2;
    system.runSelected();
    expect(system.userData.venusYears).toEqual("40.6504");
    expect(system.userData.venusLifeExpect).toEqual("105.6911")
    system.selector = 3;
    system.runSelected();
    expect(system.userData.earthYears).toEqual("25.0000");
    expect(system.userData.earthLifeExpect).toEqual("65.0000")
    system.selector = 4;
    system.runSelected();
    expect(system.userData.marsYears).toEqual("13.2908");
    expect(system.userData.marsLifeExpect).toEqual("34.5561")
    system.selector = 5;
    system.runSelected();
    expect(system.userData.jupiterYears).toEqual("2.1079");
    expect(system.userData.jupiterLifeExpect).toEqual("5.4806")
    system.selector = 6;
    system.runSelected();
    expect(system.userData.saturnYears).toEqual("0.8486");
    expect(system.userData.saturnLifeExpect).toEqual("2.2064")
    system.selector = 7;
    system.runSelected();
    expect(system.userData.uranusYears).toEqual("0.2976");
    expect(system.userData.uranusLifeExpect).toEqual("0.7737")
    system.selector = 8;
    system.runSelected();
    expect(system.userData.neptuneYears).toEqual("0.1517");
    expect(system.userData.neptuneLifeExpect).toEqual("0.3944")
    system.selector = 9;
    system.runSelected();
    expect(system.userData.plutoYears).toEqual("0.1006");
    expect(system.userData.plutoLifeExpect).toEqual("0.2615")
    system.selector = 10;
    system.runSelected();
    expect(system.userData.erisYears).toEqual("0.0448");
    expect(system.userData.erisLifeExpect).toEqual("0.1165")
  });
  test('runSelected can run all Math functions at once', () => {
    const userAge = 25;
    let select = 11;
    const system = new MainControl(userAge, select);
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
