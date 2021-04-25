function ValidateForm(frm) {
if (frm.patient_name.value == "") {alert('Name is required.');frm.patient_name.focus();return false;}
//if (frm.patient_name.value == /^[A-Za-z]+$/ || frm.patient_name.value == "") {alert('Please enter valid name');frm.patient_name.focus();return false;}
if (frm.patient_email.value == "") {alert('Email address is required.');frm.patient_email.focus();return false;}
if (frm.patient_email.value.indexOf("@") < 2 || frm.patient_email.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.patient_email.focus();return false;}
if (frm.patient_password.value == "") {alert('Password is required.');frm.patient_password.focus();return false;}
if (frm.patient_confirmpassword.value == "") {alert('Please confirm the password');frm.patient_confirmpassword.focus();return false;}
if (frm.patient_password.value != frm.patient_confirmpassword.value) {alert('Please match the password.'); frm.patient_confirmpassword.focus();return false;}
return true; }


var check = function() {
  if (document.getElementById('patient_password').value ==
    document.getElementById('patient_confirmpassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
	
  }
}

