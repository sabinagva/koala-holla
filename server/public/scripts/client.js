console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addButton' ).on( 'click', addKoala);
  getKoalas();
}); // end doc ready

function addKoala() {
    console.log( 'in addKoala');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready_for_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };

    $.ajax({
      method: 'POST',
      url: "/koalas",
      data: koalaToSend
    })
    .then(function(response){
      console.log(response);
      $('#nameIn').val('');
      $('#ageIn').val('');
      $('#genderIn').val('');
      $('#readyForTransferIn').val('');
      $('#notesIn').val();
    })
    .catch(function(error){
      console.log('error with addKoala', error);
    });

    // saveKoala( koalaToSend );
} 


function getKoalas(){
  console.log( 'in getKoalas' );
  $('#viewKoalas').empty();
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas',
  })
  .then(function(response){
    
  })
} // end getKoalas

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas
 
// }
