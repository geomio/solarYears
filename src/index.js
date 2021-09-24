import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MainControl from './maincontrol.js';

displayToUser

$(document).ready(function () {
  $('#submitUserData').click(function (event) {
    const userAge = $('#age').val();
    const userSelection = $('#length2').val();
    let mainControl = new MainControl(userAge, userSelection)
    alert("hello");
    event.preventDefault();
  });
});

