const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", function () {
  navList.style.display = "inline-block";
  menu.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", function () {
  navList.style.display = "none";
  menu.style.display = "inline-block";
  close.style.display = "none";
});


const form = document.getElementById("contactform");
form.addEventListener('submit', async function (e) {

  e.preventDefault();
  const from_name = document.getElementById("name").value;
  const from_email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const res = emailjs.send("service_i8ncm7j", "template_hk652qe", {
    from_name: from_name,
    subject: subject,
    message: message,
    email_id: from_email,
  });
  const finalresponse = await res;
  if (finalresponse.status === 200) {
    alert("Email sent succesffully");
  } else {
    alert("Email not send ! Error ocuured");
  }
})
