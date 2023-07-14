// script.js

document.getElementById("getCallButton").addEventListener("click", logFormData);

function logFormData(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("tel").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  var formData = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time
  };

  var timestamp = Date.now(); // Generate a unique timestamp

  localStorage.setItem("formData_" + timestamp, JSON.stringify(formData));

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
}
