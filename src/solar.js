export default class MainControl {
  constructor() {
    this.solarSystem = {
      constructor() {
        this.mercury = 87.965
        this.venus = 224.475
        this.earth = 365
        this.mars = 686.565
        this.jupiter = 4328.9
        this.saturn = 10752.9
        this.uranus = 30663.65
        this.neptune = 60152
        this.pluto = 90736
        this.eris = 203670
      }
    };
    this.userData = {
      constructor(name) {
        this.userName = name
        this.userAge = 25
      }
    };
  };

};
