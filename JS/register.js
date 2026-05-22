function checkFullName(fullname) {
  return /^[\p{L}\s]+$/u.test(fullname);
}
function checkUserName(username) {
  return /^[\p{L}\p{Nd}\s]+$/u.test(username);
}
function checkUser(str, userlist) {
  if (userlist.length === 0) return false;
  else {
    for (let i = 0; i < userlist.length; i++) {
      if (str === userlist[i].username) return true;
    }
    return false;
  }
}

//Đăng kí
function register() {
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  let isError = false;
  let alertFullName = "";
  let alertUserName = "";
  let alertPassWord = "";
  let alertConfirmPassWord = "";
  if (fullname === "") {
    alertFullName = "Không được để trống";
    isError = true;
  } else if (!checkFullName(fullname)) {
    alertFullName = "Không được có số hoặc có ký tự đặc biệt";
    isError = true;
  }
  if (username === "") {
    alertUserName = "Không được để trống";
    isError = true;
  } else if (!checkUserName(username)) {
    alertUserName = "Không được có ký tự đặc biệt";
    isError = true;
  }

  if (password === "") {
    alertPassWord = "Không được để trống";
    isError = true;
  }
  if (confirmpassword !== password) {
    alertConfirmPassWord = "Xác nhận mật khẩu không chính xác";
    isError = true;
  }

  const fullname_alert = document.getElementById("fullname-alert");
  const username_alert = document.getElementById("username-alert");
  const password_alert = document.getElementById("password-alert");
  const confirmpassword_alert = document.getElementById(
    "confirmpassword-alert",
  );
  fullname_alert.style.display = "block";
  fullname_alert.textContent = alertFullName;
  username_alert.style.display = "block";
  username_alert.textContent = alertUserName;
  password_alert.style.display = "block";
  password_alert.textContent = alertPassWord;
  confirmpassword_alert.style.display = "block";
  confirmpassword_alert.textContent = alertConfirmPassWord;

  if (!isError) {
    let userlist;
    if (JSON.parse(window.localStorage.getItem("userlist")) === null)
      userlist = [];
    else userlist = JSON.parse(window.localStorage.getItem("userlist"));
    const isexist = checkUser(username, userlist);
    if (isexist) {
      alert("Tên người dùng đã tồn tại!!");
    } else {
      const phone = "";
      const email = "";
      const birth = "";
      const sex = "";
      const registerData = {
        fullname: fullname,
        username: username,
        phone: phone,
        email: email,
        birth: birth,
        sex: sex,
        password: password,
        avatar: "/image/avatardefault.jpg",
      };
      userlist.push(registerData);
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(registerData));
      alert("Bạn đã đăng ký thành công!!");
      window.location.href = "/home.html";
    }
  }
}
const registerbutton = document.getElementById("register");
registerbutton.addEventListener("click", register);
