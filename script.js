let slideIndex = 1;
showSlides(slideIndex);

function nextSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-pic");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}


function validateData() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var male = document.getElementById("gender-male");
  var female = document.getElementById("gender-female");
  var cb = document.getElementById("checkbox");
  var phoneNum = document.getElementById("phone-number");

  if (!email.value.endsWith("@gmail.com")) { 
    alert('Please enter a valid email address.');
  }
  else if (!isAlphaNum(password.value)) {
    alert('Minimum 8 characters.');
  }

  else if(!male.checked && !female.checked) {
    alert('Gender must be choosed.');
  }
  
  else if (!isValidPhoneNumber(phoneNum.value)) {
    alert('Enter valid Phone Number.')
  }

  else if (!cb.checked) {
    alert('Terms and Conditions must be agreed.')
  }

  else {
      errorMsg.innerHTML = "";
      alert("Data successfully uploaded!");
  }
}

function isAlphaNum(password) {
  var isAlpha = false;
  var isNum = false;

  for (let i = 0; i < password.length; i++) {
      // 1. Alpha
      if (isNaN(password[i])) {
          isAlpha = true;
      }
      // 2. Number
      else {
          isNum = true;
      }

      // 3. Break
      if (isAlpha && isNum) {
          return true;
      }
  }
  return false;

}

function isValidPhoneNumber(phoneNumber) {
  var numericPhone = phoneNumber.split('').filter(function (char) {
      return !isNaN(parseInt(char));
  }).join('');
  return numericPhone.length > 8 && numericPhone.length < 15;
}

