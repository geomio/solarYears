import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MainControl from './src/maincontrol.js';

$(document).ready(function () {
  $('#userForm').submit(function (event) {
    console.log("hi");
    event.preventDefault();
  });
});

