function ValidateForm(frm) {
if (frm.doctor_name.value == "") {alert('Name is required.');frm.doctor_name.focus();return false;}

if (frm.doctor_email.value == "") {alert('Email address is required.');frm.doctor_email.focus();return false;}
if (frm.doctor_email.value.indexOf("@") < 2 || frm.doctor_email.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.doctor_email.focus();return false;}
if (frm.doctor_password.value == "") {alert('Password is required.');frm.doctor_password.focus();return false;}
if (frm.doctor_confirmpassword.value == "") {alert('Please confirm the password');frm.doctor_confirmpassword.focus();return false;}
if (frm.doctor_password.value != frm.doctor_confirmpassword.value) {alert('Please match the password.'); frm.doctor_confirmpassword.focus();return false;}
return true; }


var check = function() {
  if (document.getElementById('doctor_password').value ==
    document.getElementById('doctor_confirmpassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
	
  }
}

