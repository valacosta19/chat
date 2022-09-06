const login = document.getElementById("login")

login.addEventListener("click", () => {
  const user = document.getElementById("username").value

  if (user != '') {
    document.cookie = `username=${user}`
    document.location.href = '/'
  } else {
    alert("Write a username")
  }
})