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
      userAgeDays: 0
    }

    this.planetYears = 0

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
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  venusDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.venus
    let divide = number1 / number2
    let decimal = divide.toFixed(4)
    this.planetYears = decimal
  }

  earthDivide() {
    let number1 = this.userData.userAgeDays
    let number2 = this.solarSystem.earth
    let divide = number1 / number2
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

};


