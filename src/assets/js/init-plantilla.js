// BARRA MENU RESPONIF
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {

    });
  });


//register
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#register');
  var instances = M.Modal.init(elems, {
    
  });
});
// MODAL LOGIN
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#login');
  var instances = M.Modal.init(elems, {
    
  });
});





//REGISTER VALIDATE
var password = document.getElementById("password")
  , password2 = document.getElementById("password2");

function validatePassword(){
  if(password.value != password2.value) {
    password2.setCustomValidity("Passwords Don't Match");
  } else {
    password2.setCustomValidity('');
  }
}

password.onchange = validatePassword;
password2.onkeydown = validatePassword;





