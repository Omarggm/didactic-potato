const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $submitBtn = document.getElementById("submitBtn");
const $loginBtn = document.getElementById("loginBtn");

if ($submitBtn) {
  $submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const username = $username.value;
    const email = $email.value;
    const password = $password.value;
  
    if (!username || !email || !password) {
      return alert("Please fill out all fields");
    }
  
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
}

if ($loginBtn) {
$loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = $username.value;
  const password = $password.value;

  if (!username || !password) {
    return alert("Please fill out all fields");
  }

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
)}


