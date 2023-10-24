function countryChange(id){
  console.log(id);
  if(id == 'my'){
    document.getElementById('pcode').innerHTML = '+60';
  } else if(id == 'id'){
    document.getElementById('pcode').innerHTML = '+62';
  } else if(id == 'sg'){
    document.getElementById('pcode').innerHTML = '+65';
  }
}

function validate(){
  const forms = document.forms['formRegist'];

  const name = forms["name"].value;
  const email = forms["email"].value;
  const country = forms['country'].value;
  const tel = forms['tel'].value;
  const tnc = forms['tnc'].checked;

  // console.log(forms);
  // return false;

  let errorMsg = '';

  if(name == ''){
    errorMsg = 'Name is required';
  } else if(email == ''){
    errorMsg = 'Email is required';
  } else if(country == 'null'){
    errorMsg = 'Please select your country';
  } else if(tel == ""){
    errorMsg = 'Please enter your phone number';
  } else if(tel.length < 11){
    errorMsg = 'Please enter your full phone number';
  } else if(tnc == false){
    errorMsg = 'Please agree to the terms and conditions to get your daily content.';
  }

  if(errorMsg){
    alert(errorMsg);
    return false;
  }

  return true;
}

function about_us(){
  window.location.replace('../home.html?scroll_to=about-us')
}

function gallery(){
  window.location.replace('../home.html?scroll_to=gallery')
}