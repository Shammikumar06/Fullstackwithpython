var greeting="Hello , How are are are you ?";

console.log(greeting.lastIndexOf('?'));
console.log(greeting.indexOf('u'));


console.log(greeting.search("java"));    // it shows -1 in output because the value doesnot exist
console.log(greeting.match("you"));
console.log(Array.from(greeting.matchAll("are")));