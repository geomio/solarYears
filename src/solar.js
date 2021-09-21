import { ifStatement } from "@babel/types"

export default class MainControl {
  constructor(name) {

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
    }

    this.userData = {
      userName: name,
      userAgeYears: 0,
      userAgeDays: 0,
      mercuryYears: 0,
      mercuryLifeExpect: 0,
      venusYears: 0,
      venusLifeExpect: 0,
      earthYears: 0,
      earthLifeExpect: 0,
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
    }

    this.planetYears = 0

    this.selector = 0

    this.averageLife = 90

  };

  ageToDays() {
    let number1 = this.userData.userAgeYears
    let number2 = this.solarSystem.earth
    let convert = number1 * number2
    this.userData.userAgeDays = convert
  }

  mercuryDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.mercury
    let divide = number1 / number2
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.mercury
    let lifeSubtract = planetLifeExpectancy - divide
    this.userData.mercuryLifeExpect = lifeSubtract.toFixed(4)
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  venusDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.venus
    let divide = number1 / number2
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.venus
    let lifeSubtract = planetLifeExpectancy - divide
    this.userData.venusLifeExpect = lifeSubtract.toFixed(4)
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  earthDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.earth
    let divide = number1 / number2
    let lifeDayMultiplier = this.averageLife * this.solarSystem.earth
    let planetLifeExpectancy = lifeDayMultiplier / this.solarSystem.earth
    let lifeSubtract = planetLifeExpectancy - divide
    this.userData.earthLifeExpect = lifeSubtract.toFixed(4)
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  marsDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.mars
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  jupiterDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.jupiter
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  saturnDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.saturn
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  uranusDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.uranus
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  neptuneDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.neptune
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  plutoDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.pluto
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  erisDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.eris
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  runSelected() {
    if (this.selector = 1) {
      this.mercuryDivide()
      this.userData.mercuryYears = this.planetYears
    } if (this.selector = 2) {
      this.venusDivide()
      this.userData.venusYears = this.planetYears
    } if (this.selector = 3) {
      this.earthDivide()
      this.userData.earthYears = this.planetYears
    } if (this.selector = 4) {
      this.marsDivide()
      this.userData.marsYears = this.planetYears
    } if (this.selector = 5) {
      this.jupiterDivide()
      this.userData.jupiterYears = this.planetYears
    } if (this.selector = 6) {
      this.saturnDivide()
      this.userData.saturnYears = this.planetYears
    } if (this.selector = 7) {
      this.uranusDivide()
      this.userData.uranusYears = this.planetYears
    } if (this.selector = 8) {
      this.neptuneDivide()
      this.userData.neptuneYears = this.planetYears
    } if (this.selector = 9) {
      this.plutoDivide()
      this.userData.plutoYears = this.planetYears
    } if (this.selector = 10) {
      this.erisDivide()
      this.userData.erisYears = this.planetYears
    } if (this.selector = 11) {
      this.mercuryDivide()
      this.userData.mercuryYears = this.planetYears
      this.venusDivide()
      this.userData.venusYears = this.planetYears
      this.earthDivide()
      this.userData.earthYears = this.planetYears
      this.marsDivide()
      this.userData.marsYears = this.planetYears
      this.jupiterDivide()
      this.userData.jupiterYears = this.planetYears
      this.saturnDivide()
      this.userData.saturnYears = this.planetYears
      this.uranusDivide()
      this.userData.uranusYears = this.planetYears
      this.neptuneDivide()
      this.userData.neptuneYears = this.planetYears
      this.plutoDivide()
      this.userData.plutoYears = this.planetYears
      this.erisDivide()
      this.userData.erisYears = this.planetYears
    }
  }


};


