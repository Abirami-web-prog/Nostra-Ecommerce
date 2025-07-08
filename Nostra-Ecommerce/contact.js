const scriptURL = 'https://script.google.com/macros/s/AKfycbz2XRjvbUkt3Xx-KdOm2GBo6WTU7pgK48tV7s6hwUJrqt4Duf8DyWRD_i-WQf0OWSjWjQ/exec';
const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error("Error:", error);
  });
});