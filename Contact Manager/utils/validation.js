
const validatePhone = function(phone){
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

const validateEmail = function(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/.test(email);
}

// console.log(validateEmail("tuzriel66ye@yahoo.com"));
// console.log(validateEmail("tuzriel66yeyahoo.com"));
// console.log(validatePhone("1234567890"));
// console.log(validatePhone("123-456-7890"));

// const validate = function(phone){
    
// }