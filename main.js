const email = document.getElementById("email").value;
const mail = document.getElementById("mail");

function login() {
  const user = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const demo = document.getElementById("demo");

  demo.setAttribute("class", "alert alert-danger");

  if (user == "" && email == "" && password == "" && confirm == "") {
    demo.innerHTML = "please Insert Valid Data";
    return false;
  } else if (user.length < 5 || user.length > 15) {
    demo.innerHTML = "please Insert 5-15 character in username";
    return false;
  } else if (email.indexOf("@", 4) == -1 || email.indexOf(".com", 5) == -1) {
    demo.innerHTML = "email must include <b>@</b> and <b>.com</b>";
    return false;
  } else if (password.length < 8) {
    demo.innerHTML = "please Insert atleast 8 character in password";
    return false;
  } else if (password != confirm) {
    demo.innerHTML = "Password and confirm must be same value";
    return false;
  } else {
    return true;
  }
}

