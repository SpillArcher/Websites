function sendMessage() {
  const message = document.getElementById("message").value;

  // ✅ Replace this URL with your actual InfinityFree PHP URL
  fetch("https://spillarcher.infinityfreeapp.com/api/message.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "message=" + encodeURIComponent(message)
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("response").innerText = data;
  })
  .catch(error => {
    document.getElementById("response").innerText = "Error connecting to server";
    console.error(error);
  });
}
