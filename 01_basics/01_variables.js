const accountId = 1234
let accountEmail = "vivek@google.com"
var accountPassword = "00000"
accountCity = "Pune"
let accountState; // If we declare a variable without any value, then js will consider it as undefined. 

/*
Prefer not to use 'var'
because of the issue in block scope and functional scope
*/

// accountId = 2 - this is not allowed
accountEmail = "vl@vl.com"
accountPassword = "99999"
accountCity = 'Mumbai'

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])