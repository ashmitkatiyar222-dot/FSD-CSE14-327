  console.log("hello world");

  const fs = require('fs');
  fs.writeFile("output .txt", "Writing File",(err)=>{
  if(err) console.log("error occured");
  else console.log('file written successfully');
})