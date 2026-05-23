function checkFullName(fullname) {
  return /^[\p{L}\s]+$/u.test(fullname);
}
function checkUserName(username) {
  return /^[\p{L}\p{Nd}\s]+$/u.test(username);
}
function checkphonenumber(phonenumber) {
  return /^[\p{Nd}]+$/u.test(phonenumber);
}
function updatedbutton() {
  const fullnamebutton = document.getElementById("changename");
  const usernamebutton = document.getElementById("changeusername");
  const phonenumberbutton = document.getElementById("changephonenumber");
  const emailbutton = document.getElementById("changeemail");
  const birthbutton = document.getElementById("changebirthday");
  const sexbutton = document.getElementById("changesex");
  const welcomeuser = document.getElementById("username");

  const updatedname = document.getElementsByClassName(
    "change-information__fullname",
  )[0];
  const updatedusername = document.getElementsByClassName(
    "change-information__username",
  )[0];
  const updatedphone = document.getElementsByClassName(
    "change-information__phonenumber",
  )[0];
  const updatedemail = document.getElementsByClassName(
    "change-information__email",
  )[0];
  const updatedbirth = document.getElementsByClassName(
    "change-information__birthday",
  )[0];
  const updatedsex = document.getElementsByClassName(
    "change-information__sex",
  )[0];

  const fullnameclosebutton = document.getElementById(
    "change-information__fullname--close",
  );
  const usernameclosebutton = document.getElementById(
    "change-information__username--close",
  );
  const phonenumberclosebutton = document.getElementById(
    "change-information__phone--close",
  );
  const emailclosebutton = document.getElementById(
    "change-information__email--close",
  );
  const birthdayclosebutton = document.getElementById(
    "change-information__birthday--close",
  );
  const sexclosebutton = document.getElementById(
    "change-information__sex--close",
  );
  function appear(element) {
    element.style.display = "flex";
  }
  fullnamebutton.addEventListener("click", () => appear(updatedname));
  usernamebutton.addEventListener("click", () => appear(updatedusername));
  phonenumberbutton.addEventListener("click", () => appear(updatedphone));
  emailbutton.addEventListener("click", () => appear(updatedemail));
  birthbutton.addEventListener("click", () => appear(updatedbirth));
  sexbutton.addEventListener("click", () => appear(updatedsex));
}
document.addEventListener("DOMContentLoaded", updatedbutton);
function closeupdatedbutton() {
  const fullnamebutton = document.getElementById("changename");
  const usernamebutton = document.getElementById("changeusername");
  const phonenumberbutton = document.getElementById("changephonenumber");
  const emailbutton = document.getElementById("changeemail");
  const birthbutton = document.getElementById("changebirthday");
  const sexbutton = document.getElementById("changesex");

  const updatedname = document.getElementsByClassName(
    "change-information__fullname",
  )[0];
  const updatedusername = document.getElementsByClassName(
    "change-information__username",
  )[0];
  const updatedphone = document.getElementsByClassName(
    "change-information__phonenumber",
  )[0];
  const updatedemail = document.getElementsByClassName(
    "change-information__email",
  )[0];
  const updatedbirth = document.getElementsByClassName(
    "change-information__birthday",
  )[0];
  const updatedsex = document.getElementsByClassName(
    "change-information__sex",
  )[0];

  const fullnameclosebutton = document.getElementById(
    "change-information__fullname--close",
  );
  const usernameclosebutton = document.getElementById(
    "change-information__username--close",
  );
  const phonenumberclosebutton = document.getElementById(
    "change-information__phonenumber--close",
  );
  const emailclosebutton = document.getElementById(
    "change-information__email--close",
  );
  const birthdayclosebutton = document.getElementById(
    "change-information__birthday--close",
  );
  const sexclosebutton = document.getElementById(
    "change-information__sex--close",
  );
  function close(element) {
    element.style.display = "none";
  }
  fullnameclosebutton.addEventListener("click", () => close(updatedname));
  usernameclosebutton.addEventListener("click", () => close(updatedusername));
  phonenumberclosebutton.addEventListener("click", () => close(updatedphone));
  emailclosebutton.addEventListener("click", () => close(updatedemail));
  birthdayclosebutton.addEventListener("click", () => close(updatedbirth));
  sexclosebutton.addEventListener("click", () => close(updatedsex));
}
document.addEventListener("DOMContentLoaded", closeupdatedbutton);
function finduserinuserlist(currentUser, userlist) {
  for (let i = 0; i < userlist.length; i++) {
    if (
      currentUser.fullname === userlist[i].fullname &&
      currentUser.username === userlist[i].username &&
      currentUser.password === userlist[i].password
    ) {
      return userlist[i];
    }
  }
  return null;
}
function updatedinformation() {
  const userlist = JSON.parse(window.localStorage.getItem("userlist")) || [];
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const userData = finduserinuserlist(currentUser, userlist);

  const avatar = document.getElementById("avatar");
  const fullname = document.getElementById("user-information__name--fullname");
  const username = document.getElementById(
    "user-information__username--username",
  );
  const welcomeuser = document.getElementById("username");
  const phonenumber = document.getElementById(
    "user-information__phone--phonenumber",
  );
  const email = document.getElementById("user-information__email--mail");
  const birthday = document.getElementById("user-information__birth--birthday");
  const sex = document.getElementById("user-information__sex--sex");

  const updatedfullname = document.getElementById(
    "change-information__fullname",
  );
  const updatedusername = document.getElementById(
    "change-information__username",
  );
  const updatedphonenumber = document.getElementById(
    "change-information__phonenumber",
  );
  const updatedemail = document.getElementById("change-information__email");
  const updatedbirthday = document.getElementById(
    "change-information__birthday",
  );
  const updatedsex = document.getElementById("change-information__sex");

  const fullnameagreebutton = document.getElementById(
    "change-information__fullname--agree",
  );
  const usernameagreebutton = document.getElementById(
    "change-information__username--agree",
  );
  const phonenumberagreebutton = document.getElementById(
    "change-information__phonenumber--agree",
  );
  const emailagreebutton = document.getElementById(
    "change-information__email--agree",
  );
  const birthdayagreebutton = document.getElementById(
    "change-information__birthday--agree",
  );
  const sexagreebutton = document.getElementById(
    "change-information__sex--agree",
  );

  const updatedfullnamearea = document.getElementsByClassName(
    "change-information__fullname",
  )[0];
  const updatedusernamearea = document.getElementsByClassName(
    "change-information__username",
  )[0];
  const updatedphonenumberarea = document.getElementsByClassName(
    "change-information__phonenumber",
  )[0];
  const updatedemailarea = document.getElementsByClassName(
    "change-information__email",
  )[0];
  const updatedbirthdayarea = document.getElementsByClassName(
    "change-information__birthday",
  )[0];
  const updatedsexarea = document.getElementsByClassName(
    "change-information__sex",
  )[0];

  let path = userData.avatar;
  if(path.startsWith("/")) path = path.subtring(1);
  let finalpath = window.location.pathname.includes("/page/") ? "../" + path : path;
  avatar.src = finalpath;
  fullname.textContent = "Họ tên: " + userData.fullname;
  username.textContent = "Tên đăng nhập: " + userData.username;
  welcomeuser.textContent = userData.username;
  phonenumber.textContent = "SĐT: " + userData.phone;
  email.textContent = "Email: " + userData.email;
  birthday.textContent = "Ngày sinh: " + userData.birth;
  sex.textContent = "Giới tính: " + userData.sex;

  function changefullname(str) {
    if (str === "") return;
    else {
      userData.fullname = str;
      currentUser.fullname = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      fullname.textContent = "Họ tên: " + userData.fullname;
      updatedfullnamearea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  function changeusername(str) {
    if (str === "") return;
    else {
      userData.username = str;
      currentUser.username = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      username.textContent = "Tên đăng nhập: " + userData.username;
      welcomeuser.textContent = userData.username;
      updatedusernamearea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  function changephonenumber(str) {
    if (str === "") return;
    else {
      userData.phone = str;
      currentUser.phone = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      phonenumber.textContent = "SĐT: " + userData.phone;
      updatedphonenumberarea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  function changeemail(str) {
    if (str === "") return;
    else {
      userData.email = str;
      currentUser.email = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      email.textContent = "Email: " + userData.email;
      updatedemailarea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  function changebirthday(str) {
    if (str === "") return;
    else {
      userData.birth = str;
      currentUser.birth = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      birthday.textContent = "Ngày sinh: " + userData.birth;
      updatedbirthdayarea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  function changesex(str) {
    if (str === "") return;
    else {
      userData.sex = str;
      currentUser.sex = str;
      window.localStorage.setItem("userlist", JSON.stringify(userlist));
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      sex.textContent = "Giới tính: " + userData.sex;
      updatedsexarea.style.display = "none";
      alert("Cập nhật thành công!!");
    }
  }
  fullnameagreebutton.addEventListener("click", () =>
    changefullname(updatedfullname.value),
  );
  usernameagreebutton.addEventListener("click", () =>
    changeusername(updatedusername.value),
  );
  phonenumberagreebutton.addEventListener("click", () =>
    changephonenumber(updatedphonenumber.value),
  );
  emailagreebutton.addEventListener("click", () =>
    changeemail(updatedemail.value),
  );
  birthdayagreebutton.addEventListener("click", () =>
    changebirthday(updatedbirthday.value),
  );
  sexagreebutton.addEventListener("click", () => changesex(updatedsex.value));
}
document.addEventListener("DOMContentLoaded", updatedinformation);

function changeavatar(event) {
  const userlist = JSON.parse(window.localStorage.getItem("userlist")) || [];
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const userData = finduserinuserlist(currentUser, userlist);

  const useravatar = new FileReader();
  useravatar.onload = function () {
    const image = document.getElementById("avatar");
    userData.avatar = useravatar.result;
    currentUser.avatar = useravatar.result;
    window.localStorage.setItem("userlist", JSON.stringify(userlist));
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    image.src = userData.avatar;
  };
  useravatar.readAsDataURL(event.target.files[0]);
}
