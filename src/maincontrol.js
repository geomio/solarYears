export default class MainControl {
  constructor(userAgeYears, selector) {

    this.solarSystem = {
      mercury: 87.965,
      venus: 224.475,
      earth: 365,
      mars: 686.565,
      jupiter: 4328.9,
      saturn: 10752.9,
      uranus: 30663.65,
      neptune: 60152,
      pluto: 90736,
      eris: 203670
    };
    this.userData = {
      userAgeDays: 0,
      mercuryYears: 0,
      mercuryLifeExpect: 0,
      venusYears: 0,
      venusLifeExpect: 0,
      earthYears: 0,
      earthLifeExpect: 0,
      marsYears: 0,
      marsLifeExpect: 0,
      jupiterYears: 0,
      jupiterLifeExpect: 0,
      saturnYears: 0,
      saturnLifeExpect: 0,
      uranusYears: 0,
      uranusLifeExpect: 0,
      neptuneYears: 0,
      neptuneLifeExpect: 0,
      plutoYears: 0,
      plutoLifeExpect: 0,
      erisYears: 0,
      erisLifeExpect: 0
    };
    this.planetYears = 0;
    this.userAgeYears = userAgeYears;
    this.selector = selector;
    this.averageLife = 90;
  }
  ageToDays() {
    let number1 = this.userAgeYears;
    let number2 = this.solarSystem.earth;
    let convert = number1 * number2;
    this.userData.userAgeDays = convert;
  }
  mercuryMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.mercury;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.mercury;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.mercuryLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  venusMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.venus;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.venus;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.venusLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  earthMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.earth;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.earth;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.earthLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  marsMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.mars;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.mars;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.marsLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  jupiterMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.jupiter;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.jupiter;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.jupiterLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  saturnMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.saturn;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.saturn;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.saturnLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  uranusMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.uranus;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.uranus;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.uranusLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  neptuneMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.neptune;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.neptune;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.neptuneLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  plutoMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.pluto;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.pluto;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.plutoLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  erisMath() {
    let number1 = this.userData.userAgeDays;
    let number2 = this.solarSystem.eris;
    let divide = number1 / number2;
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth;
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.eris;
    let lifeSubtract = planetLifeExpectancy - divide;
    this.userData.erisLifeExpect = lifeSubtract.toFixed(4);
    let decimal = divide.toFixed(4);
    this.planetYears = decimal;
  }
  runSelected() {
    if (this.selector === 1) {
      this.mercuryMath();
      this.userData.mercuryYears = this.planetYears;
    } if (this.selector === 2) {
      this.venusMath();
      this.userData.venusYears = this.planetYears;
    } if (this.selector === 3) {
      this.earthMath();
      this.userData.earthYears = this.planetYears;
    } if (this.selector === 4) {
      this.marsMath();
      this.userData.marsYears = this.planetYears;
    } if (this.selector === 5) {
      this.jupiterMath();
      this.userData.jupiterYears = this.planetYears;
    } if (this.selector === 6) {
      this.saturnMath();
      this.userData.saturnYears = this.planetYears;
    } if (this.selector === 7) {
      this.uranusMath();
      this.userData.uranusYears = this.planetYears;
    } if (this.selector === 8) {
      this.neptuneMath();
      this.userData.neptuneYears = this.planetYears;
    } if (this.selector === 9) {
      this.plutoMath();
      this.userData.plutoYears = this.planetYears;
    } if (this.selector === 10) {
      this.erisMath();
      this.userData.erisYears = this.planetYears;
    } if (this.selector === 11) {
      this.mercuryMath();
      this.userData.mercuryYears = this.planetYears;
      this.venusMath();
      this.userData.venusYears = this.planetYears;
      this.earthMath();
      this.userData.earthYears = this.planetYears;
      this.marsMath();
      this.userData.marsYears = this.planetYears;
      this.jupiterMath();
      this.userData.jupiterYears = this.planetYears;
      this.saturnMath();
      this.userData.saturnYears = this.planetYears;
      this.uranusMath();
      this.userData.uranusYears = this.planetYears;
      this.neptuneMath();
      this.userData.neptuneYears = this.planetYears;
      this.plutoMath();
      this.userData.plutoYears = this.planetYears;
      this.erisMath();
      this.userData.erisYears = this.planetYears;
    }
  }
}


