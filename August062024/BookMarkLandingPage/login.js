
const signinId = document.getElementById("sign-in");



signinId.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = "/index.html";
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
});