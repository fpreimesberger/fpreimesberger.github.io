$(document).ready(function() {
  console.log('yuh');
})

function pressSubmit() {
  console.log('jcfioejrfoe');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (validated()) {
    document.getElementById('contact-form').submit();
  }

}

function validated()  {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || contact === '') {
    alert("Please fill all fields!");
    return false;
  } else {
    return true;
  }
}
