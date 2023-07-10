const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $submitBtn = document.getElementById("submitBtn");
const $title = document.getElementById("blogTitle");
const $blogContent = document.getElementById("blogContent");
const $blogPostSubmitBtn = document.getElementById("blogPostSubmitBtn");

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

$blogPostSubmitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const title = $title.value;
  const blogContent = $blogContent.value;

  if (!title || !blogContent) {
    return alert("Please fill out all fields");
  }

  try {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        blogContent,
      }),
    });
    const data = await response.json();
    console.log(data);
    $title.value = "";
    $blogContent.value = "";
  } catch (error) {
    console.error(error);
  }
});
