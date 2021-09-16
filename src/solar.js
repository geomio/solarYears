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
    let number1 = this.userAgeYears
    let number2 = this.earth
    let convert = number1 * number2
    this.userAgeDays = convert
  }

};


