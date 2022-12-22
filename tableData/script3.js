function myFunction() {
  var x = localStorage.getItem("users");

  document.getElementById("table").innerHTML = x;
}

function deleteItems() {
  localStorage.clear();
}


// let f_name = document.getItem("f_name")?localStorage.getItem("f_name"):""
// console.log(f_name);
// if(f_name=='')
// {
//   alert ('u need to login first')
//   window.location.href="/login/index.html";
// }

function Logout()
{
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location.href="/login/index.html";
}


