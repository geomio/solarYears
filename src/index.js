import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MainControl from './maincontrol.js';



$(document).ready(function () {
  $('#submitUserData').click(function (event) {
    const userAge = $('#age').val();
    const userSelection = $("input[name='mainUserInputs']:checked").val();
    const userAgeNum = parseInt(userAge);
    const userSelectionNum = parseInt(userSelection);
    let mainControl = new MainControl(userAgeNum, userSelectionNum)
    mainControl.ageToDays();
    mainControl.runSelected();
    if (userSelectionNum === 1) {
      $('#mercuryInfo').show();
    } if (userSelectionNum === 2) {
      $('#venusInfo').show();
    } if (userSelectionNum === 3) {
      $('#earthInfo').show();
    } if (userSelectionNum === 4) {
      $('#marsInfo').show();
    } if (userSelectionNum === 5) {
      $('#jupiterInfo').show();
    } if (userSelectionNum === 6) {
      $('#saturnInfo').show();
    } if (userSelectionNum === 7) {
      $('#uranusInfo').show();
    } if (userSelectionNum === 8) {
      $('#neptuneInfo').show();
    } if (userSelectionNum === 9) {
      $('#plutoInfo').show();
    } if (userSelectionNum === 10) {
      $('#erisInfo').show();
    } if (userSelectionNum === 11) {
      $('#mercuryInfo').show();
      $('#venusInfo').show();
      $('#earthInfo').show();
      $('#marsInfo').show();
      $('#jupiterInfo').show();
      $('#saturnInfo').show();
      $('#uranusInfo').show();
      $('#neptuneInfo').show();
      $('#plutoInfo').show();
      $('#erisInfo').show();
    };
    event.preventDefault();
  });
});

