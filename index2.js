const fs = require('fs');

// Global module
console.log("Step by step Code");
console.log("->",__dirname); // tells us directory name
console.log("->",__filename); // tells us file name


// Non Global module = bcz we have to import it 
fs.writeFileSync("hello.txt","code step by step");


// InterView Question : Can we only import one functionality of fs ?
// Ans - Yes
// const fs = require('fs').writeFileSync;
// fs("abc.txt","balle balle ");

// Question : Instead of const fs.. , can we use like const gs..?
// Ans - Yes



