
const validatePhone = function(phone){
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

const validateEmail = function(email){
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
  }}


module.exports = {validateEmail,validatePhone};
// console.log(validateEmail("tuzriel66ye@yahoo.com"));
// console.log(validateEmail("tuzriel66yeyahoo.com"));
// console.log(validatePhone("1234567890"));
// console.log(validatePhone("123-456-7890"));

// const validate = function(phone){
    
// }