
var check = function() {
  if (document.getElementById('patient_gender1').checked == false && 
    document.getElementById('patient_gender2').checked == false &&
	document.getElementById('patient_gender3').checked == false)
	{
		alert('Please mention your gender!!!');
		return false;
	}
	
	if(document.getElementById('patient_disability_yes').checked == false && 
    document.getElementById('patient_disability_no').checked == false)
	{
		alert('Please fill the disability/handicap field!!!');
		return false;
	}
	
	if(document.getElementById('patient_allergies_yes').checked == false && 
    document.getElementById('patient_allergies_no').checked == false)
	{
		alert('Please mention whether you have any allergy or no!!!');
		return false;
	}
	
	if(document.getElementById('patient_blood_group').value == "select") 
    {
		alert('Please select your blood group!!!');
		return false;
	}
	
	if(document.getElementById('patient_nationality').value == "select") 
    {
		alert('Please select your nationality!!!');
		return false;
	}
  
}