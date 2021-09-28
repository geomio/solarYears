import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MainControl from './maincontrol.js';



$(document).ready(function () {
  let clickedButton = true
  $('#submitUserData').click(function (event) {
    if (clickedButton === true) {
      clickedButton = false
      const userAge = $('#age').val();
      const userSelection = $("input[name='mainUserInputs']:checked").val();
      const userAgeNum = parseInt(userAge);
      const userSelectionNum = parseInt(userSelection);
      let mainControl = new MainControl(userAgeNum, userSelectionNum)
      mainControl.ageToDays();
      mainControl.runSelected();
      if (userSelectionNum === 1) {
        $('#mercuryInfo').show();
        $('#printAge1').text(mainControl.userAgeYears);
        $('#convertAgePrint1').text(mainControl.userData.mercuryYears);
        $('#lifePrint1').text(mainControl.userData.mercuryLifeExpect);
      } if (userSelectionNum === 2) {
        $('#venusInfo').show();
        $('#printAge2').text(mainControl.userAgeYears);
        $('#convertAgePrint2').text(mainControl.userData.venusYears);
        $('#lifePrint2').text(mainControl.userData.venusLifeExpect);
      } if (userSelectionNum === 3) {
        $('#earthInfo').show();
        $('#printAge3').text(mainControl.userAgeYears);
        $('#convertAgePrint3').text(mainControl.userData.earthYears);
        $('#lifePrint3').text(mainControl.userData.earthLifeExpect);
      } if (userSelectionNum === 4) {
        $('#marsInfo').show();
        $('#printAge4').text(mainControl.userAgeYears);
        $('#convertAgePrint4').text(mainControl.userData.marsYears);
        $('#lifePrint4').text(mainControl.userData.marsLifeExpect);
      } if (userSelectionNum === 5) {
        $('#jupiterInfo').show();
        $('#printAge5').text(mainControl.userAgeYears);
        $('#convertAgePrint5').text(mainControl.userData.jupiterYears);
        $('#lifePrint5').text(mainControl.userData.jupiterLifeExpect);
      } if (userSelectionNum === 6) {
        $('#saturnInfo').show();
        $('#printAge6').text(mainControl.userAgeYears);
        $('#convertAgePrint6').text(mainControl.userData.saturnYears);
        $('#lifePrint6').text(mainControl.userData.saturnLifeExpect);
      } if (userSelectionNum === 7) {
        $('#uranusInfo').show();
        $('#printAge7').text(mainControl.userAgeYears);
        $('#convertAgePrint7').text(mainControl.userData.uranusYears);
        $('#lifePrint7').text(mainControl.userData.uranusLifeExpect);
      } if (userSelectionNum === 8) {
        $('#neptuneInfo').show();
        $('#printAge8').text(mainControl.userAgeYears);
        $('#convertAgePrint8').text(mainControl.userData.neptuneYears);
        $('#lifePrint8').text(mainControl.userData.neptuneLifeExpect);
      } if (userSelectionNum === 9) {
        $('#plutoInfo').show();
        $('#printAge9').text(mainControl.userAgeYears);
        $('#convertAgePrint9').text(mainControl.userData.plutoYears);
        $('#lifePrint9').text(mainControl.userData.plutoLifeExpect);
      } if (userSelectionNum === 10) {
        $('#erisInfo').show();
        $('#printAge10').text(mainControl.userAgeYears);
        $('#convertAgePrint10').text(mainControl.userData.erisYears);
        $('#lifePrint10').text(mainControl.userData.erisLifeExpect);
      } if (userSelectionNum === 11) {
        $('#mercuryInfo').show();
        $('#printAge1').text(mainControl.userAgeYears);
        $('#convertAgePrint1').text(mainControl.userData.mercuryYears);
        $('#lifePrint1').text(mainControl.userData.mercuryLifeExpect);
        $('#venusInfo').show();
        $('#printAge2').text(mainControl.userAgeYears);
        $('#convertAgePrint2').text(mainControl.userData.venusYears);
        $('#lifePrint2').text(mainControl.userData.venusLifeExpect);
        $('#earthInfo').show();
        $('#printAge3').text(mainControl.userAgeYears);
        $('#convertAgePrint3').text(mainControl.userData.earthYears);
        $('#lifePrint3').text(mainControl.userData.earthLifeExpect);
        $('#marsInfo').show();
        $('#printAge4').text(mainControl.userAgeYears);
        $('#convertAgePrint4').text(mainControl.userData.marsYears);
        $('#lifePrint4').text(mainControl.userData.marsLifeExpect);
        $('#jupiterInfo').show();
        $('#printAge5').text(mainControl.userAgeYears);
        $('#convertAgePrint5').text(mainControl.userData.jupiterYears);
        $('#lifePrint5').text(mainControl.userData.jupiterLifeExpect);
        $('#saturnInfo').show();
        $('#printAge6').text(mainControl.userAgeYears);
        $('#convertAgePrint6').text(mainControl.userData.saturnYears);
        $('#lifePrint6').text(mainControl.userData.saturnLifeExpect);
        $('#uranusInfo').show();
        $('#printAge7').text(mainControl.userAgeYears);
        $('#convertAgePrint7').text(mainControl.userData.uranusYears);
        $('#lifePrint7').text(mainControl.userData.uranusLifeExpect);
        $('#neptuneInfo').show();
        $('#printAge8').text(mainControl.userAgeYears);
        $('#convertAgePrint8').text(mainControl.userData.neptuneYears);
        $('#lifePrint8').text(mainControl.userData.neptuneLifeExpect);
        $('#plutoInfo').show();
        $('#printAge9').text(mainControl.userAgeYears);
        $('#convertAgePrint9').text(mainControl.userData.plutoYears);
        $('#lifePrint9').text(mainControl.userData.plutoLifeExpect);
        $('#erisInfo').show();
        $('#printAge10').text(mainControl.userAgeYears);
        $('#convertAgePrint10').text(mainControl.userData.erisYears);
        $('#lifePrint10').text(mainControl.userData.erisLifeExpect);
      };
      event.preventDefault();
    } else {
      location.reload()
      clickedButton = true
    }
  });
});

