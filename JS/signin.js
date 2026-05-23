function finduser(signinusername, signinpassword, userlist) {
  if (userlist.length === 0) return false;
  else {
    for (let i = 0; i < userlist.length; i++) {
      if (
        signinusername === userlist[i].username &&
        signinpassword === userlist[i].password
      )
        return userlist[i];
    }
    return false;
  }
}
function signin() {
  const userlist = JSON.parse(window.localStorage.getItem("userlist"));

  const signinusername = document.getElementById("username").value;
  const signinpassword = document.getElementById("password").value;
  if (userlist === null) alert("Bạn chưa đăng ký tài khoản!!");
  else {
    const user = finduser(signinusername, signinpassword, userlist);
    if (user) {
      window.localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Chào mừng " + user.username + "!!!");
      window.location.href = "../home.html";
    } else {
      alert("Thông tin chưa đúng!!");
    }
  }
}
const signinbutton = document.getElementById("Signin");
signinbutton.addEventListener("click", signin);
