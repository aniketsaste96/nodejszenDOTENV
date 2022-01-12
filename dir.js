const fs = require('fs');

//first make directory as backup
// fs.mkdirSync("backup");
const [, , num] = process.argv


//take the value from user and create that many files in backup dir
// const write = (a) => {
//     const quote = "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead"
//     for (let i = 1; i <= a; i++) {

//         fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
//             console.log("completed", i)
//         })
//     }
// }
// console.log(write(num))

//no need of function
// const quote = "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead"
// for (let i = 1; i <= num; i++) {

//     fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
//         console.log("completed", i)
//     })
// }


//Remove all files from dir without deleteing dir
// const { readdirSync, rmSync } = require('fs');
// const dir = './backup/';

// readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));


// fs.writeFile,read,append-async
//writeFileSync,read,append - sync - nocallback





//delete
//to delete files from dir we need to get hold of what in directory

fs.readdir("./backup/", (err, data) => {

    data.forEach((fileName) => {
        fs.unlink(`./backup/${fileName}`, (err) => {
            console.log("Deleted Successfully", fileName)
        })
    })

})