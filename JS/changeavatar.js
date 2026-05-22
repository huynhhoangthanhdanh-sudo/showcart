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
function changeavatar(event) {
  const userlist = JSON.parse(window.localStorage.getItem("userlist")) || [];
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const userData = finduser(currentUser, userlist);
  const useravatar = new FileReader();
  useravatar.onload = function () {
    userData.avatar = useravatar.result;
    currentUser.avatar = useravatar.result;
    window.localStorage.setItem("userlist", JSON.stringify(userlist));
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    const image = document.getElementById("avatar");
    image.src = useravatar.result;
  };
  useravatar.readAsDataURL(event.target.files[0]);
}
