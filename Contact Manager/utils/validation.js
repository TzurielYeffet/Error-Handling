
const validatePhone = function(phone){
    const phoneRegex =  /^\d{3}-\d{3}-\d{4}$/
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}


const validateEmail = function(email){
    console.log(`email = ${email}`);
    
if (!email) {
    console.log("✗ Error: Email cannot be empty");
    return false;
  }

  if (!email.includes("@")) {
    console.log("✗ Error: Email must contain @ symbol");
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    console.log("✗ Error: Invalid email format");
    return false;
  }
return true;
}


module.exports = {validateEmail,validatePhone};
