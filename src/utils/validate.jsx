export const checkValidData = (username, email, password, isSignInForm) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
    // Validate username only when it's not a Sign In form
    if (!isSignInForm) {
      const isUserNameValid = /^[0-9A-Za-z]{6,16}$/.test(username);
      if (!isUserNameValid) return "Username is not valid";
    }
  
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };
  