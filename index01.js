function outerFunction(outerParam) {
  
    let outerVariable = "I'm inside outerFunction!";

   function innerFunction() {
        console.log(`Outer Param: ${outerParam}`);
        console.log(`Outer Variable: ${outerVariable}`);
    }
    return innerFunction;
}

const myInnerFunction = outerFunction("Hello, World!");
myInnerFunction();
