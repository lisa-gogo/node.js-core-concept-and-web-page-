const path = require('path')// path already includes the note
// Base file name 
console.log(__filename)// url
console.log(path.basename(__filename))//file name 

// Directory name 
console.log(path.dirname(__filename))

// file extension 
console.log(path.extname(__filename))// give js

// Create path object 
console.log(path.parse(__filename))// give detail 

console.log(path.parse(__filename).base)// base detail

//concatenate path
console.log(path.join(__dirname,'test','hello.html'))

