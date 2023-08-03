const fs = require("fs");

const directoryName = "Students";
const newDirectoryName = "Names";
const fileName = "user.js";
const newFileName = "emmanuel_omopariola.js";
const initialFileContent = "Name: Emmanuel Omopariola"
const fileContent = `
Age: 26,
Sex: Male,
School: AltSchool Africa,
Nationality: Nigerian,
Phone: +2349072668695,
Hobby: Football`;

const fstask = async() => {
    try {
        // Create directory/folder named: “Students”
        await fs.promises.mkdir(directoryName);
        console.log(`${directoryName} directory created successfully`);

        // In the Students directory, create a file named user.js
        await fs.promises.writeFile(`${directoryName}/${fileName}`, "");
        console.log(`"${fileName}" file created successfully.`);

        // Update the Students directory to “Names”
        await fs.promises.rename(directoryName, newDirectoryName);
        console.log(`${directoryName} renamed to ${newDirectoryName}`);

        // Add your name as content to the file user.js
        await fs.promises.writeFile(`${newDirectoryName}/${fileName}`, initialFileContent);
        console.log(`Contents added to ${fileName}`);

        // Update the file and add your age, sex, nationality, phone number and any other information about yourself
        await fs.promises.appendFile(`${newDirectoryName}/${fileName}`, fileContent);
        console.log(`${fileName} content updated`)

        // Update the file user.js to {your_name}.js eg daniel_adesoji.js
        await fs.promises.rename(`${newDirectoryName}/${fileName}`, `${newDirectoryName}/${newFileName}`);
        console.log(`${fileName} updated to ${newFileName}`);

        // Read the contents from {your_name}.js. User fs.open or fs.readFile
        const data = await fs.promises.readFile(`${newDirectoryName}/${newFileName}`, "utf-8")
        console.log(data);
        console.log(`${newFileName} read successfully`);

        // Delete the file {your_name}.js
        await fs.promises.unlink(`${newDirectoryName}/${newFileName}`);
        console.log(`${newFileName} deleted Successfully`);

        // Delete the directory “Names”
        await fs.promises.rmdir(`${newDirectoryName}`);
        console.log(`${newDirectoryName} directory/folder deleted Successfully`);
    } catch (error) {
        console.log("Error Occured:", error)
    }
}

fstask();
