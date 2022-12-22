function saveData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
      
  if(user_records.some((v)=>{return v.email==email && v.password==password}))
    {
        alert("Login Pass");
        window.location.href="/tableData/index3.html";
    }
    else{
       window.alert("Login Fail Please Sign Up");
        window.location.href="/signUp/index2.html";
    };
  }