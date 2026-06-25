// Immediately Invoked Functions Expressions (IIFE)
(function chai(){
    console.log("DB connected");  
})();

(() => {
    console.log("DB CONNECTED TWO");
})();