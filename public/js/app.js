const $username = document.querySelector("#username");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

$submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = $username.value;
  const email = $email.value;
  const password = $password.value;

  if (!username || email || password) {
    return alert("Please fill in all fields");
  }

  try {
    const res = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    location.href = `/users/${data.id}`;
  } catch (error) {
    console.log(error);
    alert("Error signing up");
  }
});
