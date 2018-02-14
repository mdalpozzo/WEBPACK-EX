//click handler for form and button
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var inputText = document.getElementById("input").value;
  submitCSV(inputText);
}, false)

function submitCSV (form) {
  // var JSONstring = document.getElementById("input").value;
  // console.log(form);
  // $.get('/', )
  // $.ajax({
  //   type: 'POST',
  //   url: '/',
  //   data: JSONstring,
  //   success: (err) => {
  //     console.log('SOMETHING\'S WRONG... it\'s probably you.);
  //   },
  //   dataType: 'application/json'
  // });

  let response = new XMLHttpRequest;
  response.open('POST', '/convert');
  response.setRequestHeader('Content-Type','application/json');
  response.onreadystatechange = function () {
    if (response.readystate === 4) {
      console.log('hello');
      let response = new XMLHttpRequest;
      response.open('GET', '/convert');
      response.setRequestHeader('Content-Type', 'text/csv');
      //onload -- event listener for successful completion of xmlhttprequest transaction
      response.onload = function () {
        let CSVdata = response.responseText;
        console.log(CSVdata);
        //attach to dom
      }
    }
  }
  response.send(form);
  console.log(response);
}