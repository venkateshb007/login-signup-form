function saveData() {
    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
  
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
  
    
      user_records.push({
        f_name: f_name,
        l_name: l_name,
        email: email,
        number: number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(user_records));
    
  }