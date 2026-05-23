function addavatar() {
  const guest = document.getElementById("guest");
  const user = document.getElementById("user");
  const avatar = document.getElementById("header__information--avatar");
  const clientusername = document.getElementById(
    "header__information--username",
  );
  const userData = JSON.parse(window.localStorage.getItem("currentUser"));
  if (userData) {
    const username = userData.username;
    avatar.src = userData.avatar;
    guest.style.display = "none";
    user.style.display = "flex";
    clientusername.textContent = username;
  } else {
    guest.style.display = "flex";
    user.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", addavatar);
function logout() {
  window.location.href = "#";
  window.localStorage.removeItem("currentUser");
}
function gotocustomer() {
  window.location.href = "page/customer.html";
}
