
function findCharacterClasses(str) {
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharPattern = /[^a-zA-Z0-9\s]/g; 

    const digits = str.match(digitPattern) || [];
    const uppercaseLetters = str.match(uppercasePattern)|| [];
    const lowercaseLetters = str.match(lowercasePattern) || [];
    const specialChars = str.match(specialCharPattern) || [];
    return {
        digits,
        uppercaseLetters,
        lowercaseLetters,
        specialChars
    };
}
console.log(findCharacterClasses("Hello World! 1234"));
console.log(findCharacterClasses("Testing123!@#++++**+-*//**-"));
console.log(findCharacterClasses("NoDigitsOrSpecialCharsHeghgfyghdtgvgre"));
console.log(findCharacterClasses("UPPERcase&lowerCASE*"));
console.log(findCharacterClasses("!@#$%^&*()_+123ABCabc"));
