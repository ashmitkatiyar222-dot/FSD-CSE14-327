import { writeFile,readFile,appendFile } from "fs/promises"
// await writeFile("stud.txt","ravikant singh\nfile overwrite");
// console.log("file written");

// const data = await readFile("stud.txt","utf-8");
// console.log(`file-content ${data}`);

const addContent =async (fname,content)=>{
    await writeFile(fname, content);
    console.log("file written");
};

const readContent = async (fname) => {
    const notes = await readFile(fname, "utf-8");
    return notes;
};

const appenddata= async (fname,content)=>{
await appendFile (fname,"\n"+content);
console.log("data append");
};
await addContent("notes.txt","fs is easy in js");
console.log(await readContent("notes.txt"));
await appenddata("notes.txt","it can read and write files");