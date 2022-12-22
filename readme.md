<!-- class="glow-on-hover" -->


/* .login .login-form button,
.login .login-form input [type=submit]{
    display: inline-block;
    background-color: #010101;
    width: 100%;
    margin-top: 5px;
    color: #2aa15f;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #2aa15f;
    border-radius: 30px;
    box-shadow: inset 0 0 0 0 #2aa15f;
    transition: .3s;
    
} */



/* .login .login-form p:last-child label{
    width: 60%;
    float: left;
} */



  const btn = document.getElementById("users");

  btn.addEventListener("click", () => {
    const data = localStorage.getItem("users");
    const users = JSON.parse(data);

    document.getElementById("table").innerHTML = `
    <div>
    ${createTable(users)}
    </div>
    `;
  });

  const createTable = (users) => {
    return `
    <table class="table table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone number</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
            ${createTableData(users)}
            </tbody>
            </table>
            `;
  };

  const createTableData = (users) => {
    let html = "";
    users.forEach((users) => {
      html += `
        <tr>
            <td>${users.f_name}</td>
            <td>${users.l_name}</td>
            <td>${users.email}</td>
            <td>${users.number}</td>
            <td>${users.password}</td>
        </tr>
              `;
    });
    return html;
  };