console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addButton' ).on( 'click', addKoala);
  getKoalas();
  $('#viewKoalas').on('click', "#delete-button", deleteKoala);
  $('#viewKoalas').on('click', "#ready-to-button", putKoala);

  
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
      ready_to_transfer: $('#readyForTransferIn').val(),
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
} 


function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas',
  })
  .then(function(response){
    console.log('getKoalas response:', response);
    renderToDom(response);
  })
  .catch(function(error){
    console.log('error in GET', error);
  });
} // end getKoalas


function renderToDom(response){
  $('#viewKoalas').empty();
  for (koala of response){
    if (!koala.ready_to_transfer){
      $('#viewKoalas').append(`
    <tr data-id="${koala.id}">
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button id="ready-to-button">Ready for Transfer</button></td>
        <td><button id="delete-button">DELETE</button></td>
      </tr>
    `)
    } else { $('#viewKoalas').append(`
    <tr data-id="${koala.id}">
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td></td>
        <td><button id="delete-button">DELETE</button></td>
      </tr>
    `)
    }
  }
  console.log('true?', koala.ready_to_transfer);
}


// Deletes a row from the table
function deleteKoala(){
  console.log('Delete mcYeet button clicked');

  const idToDelete = $(this).closest('tr').data('id');

  $.ajax({
    method: 'DELETE',
    url:`/koalas/${idToDelete}`
  }).then(function(response){
    console.log('Delete koala works');
    getKoalas();

  }).catch(error=>{
    console.log('Delete koala is not functioning ');
  })

}

// updates True and false values of a row
function putKoala(){
  console.log('koala button clicked ');

  const idToUpdate = $(this).closest('tr').data('id');

  // value is going to be the true and false value
  let data = {
    value: false 
  }

  $.ajax({
    method: 'PUT',
    url:`/koalas/${idToUpdate}`
  }).then(function(response){
    console.log('update koala works', response);
    getKoalas();

  }).catch(error=>{
    console.log('update koala is not functioning',error);
  })

}


