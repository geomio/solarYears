import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MainControl from './maincontrol.js';

$(document).ready(function () {
  let clickedButton = true;
  $('#mainForm').submit(function (event) {
    if (clickedButton === true) {
      clickedButton = false;
      const userAge = $('#age').val();
      const userSelection = $("input[name='mainUserInputs']:checked").val();
      const userAgeNum = parseInt(userAge);
      const userSelectionNum = parseInt(userSelection);
      let mainControl = new MainControl(userAgeNum, userSelectionNum);
      mainControl.ageToDays();
      mainControl.runSelected();
      if (userSelectionNum === 1) {
        $('#mercuryInfo').show();
        $('#printAge1').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.mercuryLifeExpect);
        if (mainControl.userData.mercuryLifeExpect < 0) {
          let overLife = mainControl.userData.mercuryLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife1').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint1').text(mainControl.userData.mercuryLifeExpect);
        }
        $('#convertAgePrint1').text(mainControl.userData.mercuryYears);
      } else if (userSelectionNum === 2) {
        $('#venusInfo').show();
        $('#printAge2').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.venusLifeExpect);
        if (mainControl.userData.venusLifeExpect < 0) {
          let overLife = mainControl.userData.venusLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife2').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint2').text(mainControl.userData.venusLifeExpect);
        }
        $('#convertAgePrint3').text(mainControl.userData.venusYears);
      } else if (userSelectionNum === 3) {
        $('#earthInfo').show();
        $('#printAge3').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.earthLifeExpect);
        if (mainControl.userData.earthLifeExpect < 0) {
          let overLife = mainControl.userData.earthLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife3').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint3').text(mainControl.userData.earthLifeExpect);
        }
        $('#convertAgePrint3').text(mainControl.userData.earthYears);
      } else if (userSelectionNum === 4) {
        $('#marsInfo').show();
        $('#printAge4').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.marsLifeExpect);
        if (mainControl.userData.marsLifeExpect < 0) {
          let overLife = mainControl.userData.marsLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife4').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint4').text(mainControl.userData.marsLifeExpect);
        }
        $('#convertAgePrint4').text(mainControl.userData.marsYears);
      } else if (userSelectionNum === 5) {
        $('#jupiterInfo').show();
        $('#printAge5').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.jupiterLifeExpect);
        if (mainControl.userData.jupiterLifeExpect < 0) {
          let overLife = mainControl.userData.jupiterLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife5').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint5').text(mainControl.userData.jupiterLifeExpect);
        }
        $('#convertAgePrint5').text(mainControl.userData.jupiterYears);
      } else if (userSelectionNum === 6) {
        $('#saturnInfo').show();
        $('#printAge6').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.saturnLifeExpect);
        if (mainControl.userData.saturnLifeExpect < 0) {
          let overLife = mainControl.userData.saturnLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife6').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint6').text(mainControl.userData.saturnLifeExpect);
        }
        $('#convertAgePrint6').text(mainControl.userData.saturnYears);
      } else if (userSelectionNum === 7) {
        $('#uranusInfo').show();
        $('#printAge7').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.uranusLifeExpect);
        if (mainControl.userData.uranusLifeExpect < 0) {
          let overLife = mainControl.userData.uranusLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife7').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint7').text(mainControl.userData.uranusLifeExpect);
        }
        $('#convertAgePrint7').text(mainControl.userData.uranusYears);
      } else if (userSelectionNum === 8) {
        $('#neptuneInfo').show();
        $('#printAge8').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.neptuneLifeExpect);
        if (mainControl.userData.neptuneLifeExpect < 0) {
          let overLife = mainControl.userData.neptuneLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife8').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint8').text(mainControl.userData.neptuneLifeExpect);
        }
        $('#convertAgePrint8').text(mainControl.userData.neptuneYears);
      } else if (userSelectionNum === 9) {
        $('#plutoInfo').show();
        $('#printAge9').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.plutoLifeExpect);
        if (mainControl.userData.plutoLifeExpect < 0) {
          let overLife = mainControl.userData.plutoLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife9').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint9').text(mainControl.userData.plutoLifeExpect);
        }
        $('#convertAgePrint9').text(mainControl.userData.plutoYears);
      } else if (userSelectionNum === 10) {
        $('#erisInfo').show();
        $('#printAge10').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.erisLifeExpect);
        if (mainControl.userData.erisLifeExpect < 0) {
          let overLife = mainControl.userData.erisLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife10').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint10').text(mainControl.userData.erisLifeExpect);
        }
        $('#convertAgePrint10').text(mainControl.userData.erisYears);
      } else if (userSelectionNum === 11) {
        $('#mercuryInfo').show();
        $('#printAge1').text(mainControl.userAgeYears);
        if (mainControl.userData.mercuryLifeExpect < 0) {
          let overLife = mainControl.userData.mercuryLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife1').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint1').text(mainControl.userData.mercuryLifeExpect);
        }
        $('#convertAgePrint1').text(mainControl.userData.mercuryYears);
        $('#venusInfo').show();
        $('#printAge2').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.venusLifeExpect);
        if (mainControl.userData.venusLifeExpect < 0) {
          let overLife = mainControl.userData.venusLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife2').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint2').text(mainControl.userData.venusLifeExpect);
        }
        $('#convertAgePrint2').text(mainControl.userData.venusYears);
        $('#earthInfo').show();
        $('#printAge3').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.venusLifeExpect);
        if (mainControl.userData.venusLifeExpect < 0) {
          let overLife = mainControl.userData.venusLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife3').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint3').text(mainControl.userData.earthLifeExpect);
        }
        $('#convertAgePrint3').text(mainControl.userData.earthYears);
        $('#marsInfo').show();
        $('#printAge4').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.marsLifeExpect);
        if (mainControl.userData.marsLifeExpect < 0) {
          let overLife = mainControl.userData.marsLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife4').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint4').text(mainControl.userData.marsLifeExpect);
        }
        $('#convertAgePrint4').text(mainControl.userData.marsYears);
        $('#jupiterInfo').show();
        $('#printAge5').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.jupiterLifeExpect);
        if (mainControl.userData.jupiterLifeExpect < 0) {
          let overLife = mainControl.userData.jupiterLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife5').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint5').text(mainControl.userData.jupiterLifeExpect);
        }
        $('#convertAgePrint5').text(mainControl.userData.jupiterYears);
        $('#saturnInfo').show();
        $('#printAge6').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.saturnLifeExpect);
        if (mainControl.userData.saturnLifeExpect < 0) {
          let overLife = mainControl.userData.saturnLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife6').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint6').text(mainControl.userData.saturnLifeExpect);
        }
        $('#convertAgePrint6').text(mainControl.userData.saturnYears);
        $('#uranusInfo').show();
        $('#printAge7').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.uranusLifeExpect);
        if (mainControl.userData.uranusLifeExpect < 0) {
          let overLife = mainControl.userData.uranusLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife7').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint7').text(mainControl.userData.uranusLifeExpect);
        }
        $('#convertAgePrint7').text(mainControl.userData.uranusYears);
        $('#neptuneInfo').show();
        $('#printAge8').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.neptuneLifeExpect);
        if (mainControl.userData.neptuneLifeExpect < 0) {
          let overLife = mainControl.userData.neptuneLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife8').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint8').text(mainControl.userData.neptuneLifeExpect);
        }
        $('#convertAgePrint8').text(mainControl.userData.neptuneYears);
        $('#plutoInfo').show();
        $('#printAge9').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.plutoLifeExpect);
        if (mainControl.userData.plutoLifeExpect < 0) {
          let overLife = mainControl.userData.plutoLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife9').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint9').text(mainControl.userData.plutoLifeExpect);
        }
        $('#convertAgePrint9').text(mainControl.userData.plutoYears);
        $('#erisInfo').show();
        $('#printAge10').text(mainControl.userAgeYears);
        parseInt(mainControl.userData.erisLifeExpect);
        if (mainControl.userData.erisLifeExpect < 0) {
          let overLife = mainControl.userData.erisLifeExpect * -1;
          console.log("you have lived:", overLife, "years past the expectancy's");
          $('#remainingLife10').html("you have lived : " + overLife + " years past the expectancy's");
        } else {
          $('#lifePrint10').text(mainControl.userData.erisLifeExpect);
        }
        $('#convertAgePrint10').text(mainControl.userData.erisYears);
      }
      event.preventDefault();
    } else {
      location.reload();
      clickedButton = true;
    }
  });
});

