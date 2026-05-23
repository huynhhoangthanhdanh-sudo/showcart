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
  const file = event.target.files[0];
  if(!file) return;
  const useravatar = new FileReader();

  const userlist = JSON.parse(window.localStorage.getItem("userlist")) || [];
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const userData = finduser(currentUser, userlist);

  useravatar.onload = function(e){
    const img = new Image();
    img.src = e.target.result;

    img.onload = function(){
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const size = 150;
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img,0,0,size,size);
      const imgURL = canvas.toDataURL("image/jpeg",0.7);

      if(currentUser){
        currentUser.avatar = imgURL;
        userData.avatar = imgURL;
      }
      window.localStorage.setItem("userlist",JSON.stringify(userlist));
      window.localStorage.setItem("currentUser",JSON.stringify(currentUser));

      const imageavatar = document.getElementById("avatar");
      imageavatar.src = imgURL;
    }
  }
  useravatar.readAsDataURL(file);
}
