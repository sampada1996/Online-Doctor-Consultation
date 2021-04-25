
var check = function() {
  if (document.getElementById('doctor_gender1').checked == false && 
    document.getElementById('doctor_gender2').checked == false &&
	document.getElementById('doctor_gender3').checked == false)
	{
		alert('Please mention your gender!!!');
		return false;
	}
	if(document.getElementById('doctor_nationality').value == "select") 
    {
		alert('Please select your nationality!!!');
		return false;
	}
	if(document.getElementById('doctor_specialization').value == "select") 
    {
		alert('Please select your specialization!!!');
		return false;
	}
	
	if(document.getElementById('doctor_experience').value == "select") 
    {
		alert('Please select your experience!!!');
		return false;
	}
	
	
  
}