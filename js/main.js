// get users data
function getUserData(form){
    if(!form.userfname.value || !form.userlname.value || !form.usergender.value || !form.userEmail.value || !formPhone.value || !favColor.value || !form.userBirth.value){
    	alert('missing data')
    	return
    }
// store all form data in an object
  var useProfile={
	firstname : form.userfname.value,
	lastname : form.userlname.value,
	gender: form.usergender.value,
	Email: form.userEmail.value,
	phone:form.userPhone.value,
    color:form.favColor.value,
    birthplace:form.userBirth.value
   }
   displayProfile(userProfile)
}
//display profile info.
function displayProfile(userProfile){
	console.log(userProfile)
	var username = document.getElementById('username')
	    usergender= document.getElementById('usergender')
	    userEmail= document.getElementById('userEmail')
	    userPhone= document.getElementById('userPhone')
	    userColor= document.getElementById('userColor')
	    userBirthplace = document.getElementById('userBirthplace')

	    // hide new profile form
	document.getElementById('newProfile').style.display = "none"
	// display updated profile data
	document.getElementById('updatedProfile').style.display = "block"
}
document.getElementById('sendDataButton').addEventListener('click', function() {
	// pass newprofile form through getUserData function
	getUserData(document.newprofile1)
}, false)













