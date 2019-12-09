const name = document.getElementById('name');
const email = document.getElementById('email');
const registration = document.getElementById('registration');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');

name.addEventListener('blur', valdiateName);
registration.addEventListener('blur', valdiateRegistration);
email.addEventListener('blur', valdiateEmail);
phone.addEventListener('blur', valdiatePhone);

function valdiateName() {
  const re = /^[a-zA-Z ]{2,15}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');
  }
}

function valdiateEmail() {
  // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
  const re = /^(201[0-9]((BIT)|(bit))[0-9]{3})@sggs.ac.in$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');

  }
}

function valdiatePhone() {
  const re = /^[7-9][0-9]{9}$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
  }
}

function valdiateRegistration() {
  const re = /^(201[0-9]((BIT)|(bit))[0-9]{3})$/;
  if (!re.test(registration.value)) {
    registration.classList.add('is-invalid');
  } else {
    registration.classList.remove('is-invalid');
    registration.classList.add('is-valid');
  }
}


submit.addEventListener('click', function (e) {
  if (name.value.trim() == '' || email.value.trim() == '' || registration.value.trim() == '' || phone.value.trim() == '') {
    showAlert('danger', 'Fields can not be blank');
  } else if (name.classList.contains('is-invalid')) {
    showAlert('danger', 'Enter Valid Name 😬');
  } else if (email.classList.contains('is-invalid')) {
    showAlert('danger', 'Enter Valid Email 😦');
  } else if (registration.classList.contains('is-invalid')) {
    showAlert('danger', 'Enter Valid Registration No. 😵');
  } else if (phone.classList.contains('is-invalid')) {
    showAlert('danger', 'Enter Valid Phone Number 🙄');
  } else {
    showAlert('success', 'Thank You !!🙂 ')
    //  name.value = '';
    //  email.value = '';
    //  phone.value= '';
    //  registration.value= '';
  }
  e.preventDefault();
});


function showAlert(color, message) {
  const alert = document.getElementById('alert');
  if (!alert.classList.contains(`alert-` + color, 'p-1')) {
    alert.classList.add(`alert-` + color, 'p-1');
    alert.innerText = message;
    setTimeout(() => {
      alert.classList.remove(`alert-` + color, 'p-1');
      alert.innerText = '';
    }, 2000);
  }
}