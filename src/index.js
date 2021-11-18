import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeIndex from "./get-bike.js";

function getElements(response){
  if (response.bikes){
    for (let i = 0; i < response.bikes.length; i++) {
      $("#display").append(`<li>The Id number is: ${response.bikes[i].id}</li>`);
      $("#display").append(`Bike: ${response.bikes[i].title}`);
      $("#display").append(`Location stolen: ${response.bikes[i].stolen_location}`);
      $("#display").append(`year: ${response.bikes[i].year}`);
      $("#display").append(`Serial #: ${response.bikes[i].serial}`);
    }
  } else {
    $("#showErrors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function(){
  $("#searchIndex").click(function(){
    let location = $("#search").val();
    BikeIndex.GetBike(location)
    .then(function(response){
    getElements(response);
    });
  });
});