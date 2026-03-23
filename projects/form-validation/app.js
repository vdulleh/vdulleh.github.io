
document
.getElementById('summit_btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    let fullNameIsValid = false
    let emailIsValid = false
    let passwordIsValid = false
    let confirmPasspordIsValid = false


   let full_name = document.getElementById('full_name');
   if (full_name.value.trim() ==='') {
    document.getElementById('full_name_error').textContent = 
    'full name is required.';
   }
   else {
        document.getElementById('full_name_error').textContent = '';
        fullNameIsValid = true;
   }

   let email = document.getElementById('email');
   if (email.value.trim() === '') {
    document.getElementById('email_error').textContent = 'Email is required.';
   }
   else if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) {
    document.getElementById('email_error').textContent = 'Email is not valid';
   }
   else {
    document.getElementById('email_error').textContent = '';
    emailIsValid = true;
   }

   let password = document.getElementById('password');
   if (password.value.trim() === '') {
    document.getElementById('password_error').textContent = 'Password is required.';
   }
   else if (password.value.length < 8) {
    document.getElementById('password_error').textContent = 'Password must be at least 8 characters';
   }
   else {
    document.getElementById('password_error').textContent = '';
   passwordIsValid = true;

   }

    let confirmPasspord = document.getElementById('confirm_password');
   if (confirmPasspord.value.trim() === '') {
    document.getElementById('confirm_password_error').textContent = 'Confirm Password is required.';
   }
   else if (confirmPasspord.value !== password.value) {
    document.getElementById('confirm_password_error').textContent = 'Password do not match';
   }
   else {
    document.getElementById('confirm_password_error').textContent = '';
    confirmPasspordIsValid = true;
   }


   if(fullNameIsValid && emailIsValid && passwordIsValid & confirmPasspordIsValid) {
        ('form submmited successfully!')
   }


});

    //events list 
    // click
    //mouseover
    //mouseout
    //keydown
    //keyup(when you press the key)
    //change
    //summit (for forms)
    //focus
    //blur