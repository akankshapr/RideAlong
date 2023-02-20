function showSignUpForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("hide").style.display = "none";
  }

  function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("hide").style.display = "none";
  }
  function showIndex(){
    document.getElementById("hide").style.display = "block"; 
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
  }


  