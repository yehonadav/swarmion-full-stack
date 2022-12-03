"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const projectName = 'swarmion-full-stack';
const ignorePaths = [(0, path_1.join)(__dirname, '.git' + path_1.sep)];
// put the new name here
const renamedProjectName = __dirname.split(path_1.sep).slice(-1)[0];
console.log({
    message: 'found project name',
    projectName,
    renamedProjectName,
    ignorePaths,
});
if (renamedProjectName === undefined ||
    renamedProjectName.length === 0)
    throw new Error('failed to extract renamedProjectName');
if (renamedProjectName === projectName)
    throw new Error('renamedProjectName must be different from projectName');
function* walkSync(dir) {
    const files = (0, fs_1.readdirSync)(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync((0, path_1.join)(dir, file.name));
        }
        else {
            yield (0, path_1.join)(dir, file.name);
        }
    }
}
const replaceFileText = ({ filePath, text, newText, }) => {
    (0, fs_1.readFile)(filePath, 'utf8', (readFileError, data) => {
        if (readFileError) {
            return console.log({
                section: 'replaceFileText.readFile',
                message: readFileError.message,
                error: readFileError,
            });
        }
        if (data.includes(text)) {
            console.log({
                message: 'found file text to rename',
                filePath,
                text,
                newText,
            });
            // const result = data.split(text).join(newText);
            //
            // writeFile(filePath, result, 'utf8', writeFileError => {
            //   if (writeFileError)
            //     return console.log({
            //       section: 'replaceFileText.writeFile',
            //       message: writeFileError.message,
            //       error: writeFileError,
            //     });
            // });
        }
    });
};
for (const filePath of walkSync(__dirname)) {
    if (ignorePaths.find(i => filePath.startsWith(i)) != null)
        continue;
    replaceFileText({
        filePath: filePath,
        text: projectName,
        newText: renamedProjectName,
    });
    const extension = (0, path_1.extname)(filePath);
    const filename = (0, path_1.basename)(filePath, extension);
    if ((filename + extension).includes(projectName)) {
        const renamedFilePath = filePath
            .split(projectName)
            .join(renamedProjectName);
        console.log({
            message: 'found filename to rename',
            filePath,
            renamedFilePath,
        });
        // renameSync(
        //   join(pathToProjectFolder, filename),
        //   join(pathToProjectFolder, renamedFilename),
        // );
    }
}
