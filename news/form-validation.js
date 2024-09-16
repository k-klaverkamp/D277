document.getElementById("confirmEmail").addEventListener("input", function () {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const emailError = document.getElementById("emailError");

  if (confirmEmail !== email) {
    emailError.textContent = "Email addresses do not match.";
  } else {
    emailError.textContent = "";
  }
});
