
function regexTest(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

console.log(regexTest('^hello', 'hello world'));  
console.log(regexTest('world$', 'hello world'));  
console.log(regexTest('\\d+', 'abc123'));    
console.log(regexTest('^[a-zA-Z]+$', 'abhccgdfXYZ'));  
console.log(regexTest('^[a-zA-Z]+$', 'addswsdffbc123'));  
console.log(regexTest('\\s', 'hello world'));     
console.log(regexTest('^\\w+@\\w+\\.\\w+$', 'test@example.com'));
console.log(regexTest('^\\w+@\\w+\\.\\w+$', 'test@com'));   
