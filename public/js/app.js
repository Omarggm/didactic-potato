const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $submitBtn = document.getElementById("submitBtn");

$submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = $username.value;
  const email = $email.value;
  const password = $password.value;

  if (!username || !email || !password) {
    return alert("Please fill out all fields");
  }

  try {
    const response = await fetch("/api/users", {
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
    $username.value = "";
    $email.value = "";
    $password.value = "";
  } catch (error) {
    console.error(error);
  }
});
