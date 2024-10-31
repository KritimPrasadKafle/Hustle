const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;

}


//Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

}


//check email is valid
function isValidEmail(input) {


  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//Event Listeners
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (username.value === '') {
//     showError(username, 'Username is required');
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === '') {
//     showError(email, 'Email is required');

//   } else if (!isValidEmail(email.value)) {
//     showError(email, 'Email is required');
//   }

//   else {
//     showSuccess(email);


//   }
//   if (password.value === '') {
//     showError(password, 'password is required');
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === '') {
//     showError(password2, 'password is required');
//   } else {
//     showSuccess(password2);
//   }
// })


//check required fields

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//check passwords match

function checkPassword(input1, input2) {
  if (input1.value.trim() != input2.value.trim()) {
    showError(input2, "Passwords dont match");

  }
}


//get FieldName

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, password, email, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  isValidEmail(email);
  checkPassword(password, password2);


});

