import { readdirSync, readFile, rename, writeFile } from 'fs';
import { join, sep } from 'path';

const projectName = 'swarmion-full-stack';

const ignorePaths = [join(__dirname, '.git' + sep)];

// put the new name here
const renamedProjectName = __dirname.split(sep).slice(-1)[0] as string;

console.log({
  message: 'found project name',
  projectName,
  renamedProjectName,
  ignorePaths,
});

if (
  (renamedProjectName as string | undefined) === undefined ||
  renamedProjectName.length === 0
)
  throw new Error('failed to extract renamedProjectName');

if (renamedProjectName === projectName)
  throw new Error('renamedProjectName must be different from projectName');

function* walkSync(dir: string): Generator<string> {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(join(dir, file.name));
    } else {
      yield join(dir, file.name);
    }
  }
}

const replaceFileText = ({
  filePath,
  text,
  newText,
}: {
  filePath: string;
  text: string;
  newText: string;
}) => {
  readFile(filePath, 'utf8', (readFileError, data) => {
    if (readFileError) {
      return console.log({
        section: 'replaceFileText.readFile',
        message: readFileError.message,
        error: readFileError,
        filePath,
      });
    }
    if (data.includes(text)) {
      console.log({
        message: 'found file text to rename',
        filePath,
        text,
        newText,
      });
      const result = data.split(text).join(newText);

      writeFile(filePath, result, 'utf8', writeFileError => {
        if (writeFileError)
          return console.log({
            section: 'replaceFileText.writeFile',
            message: writeFileError.message,
            error: writeFileError,
            filePath,
          });
      });
    }
  });
};

for (const filePath of walkSync(__dirname)) {
  if (ignorePaths.find(i => filePath.startsWith(i)) != null) continue;

  replaceFileText({
    filePath: filePath,
    text: projectName,
    newText: renamedProjectName,
  });

  if (filePath.includes(projectName)) {
    const renamedFilePath = filePath
      .split(projectName)
      .join(renamedProjectName);

    console.log({
      message: 'found filename to rename',
      filePath,
      renamedFilePath,
    });

    rename(filePath, renamedFilePath, renameError => {
      if (renameError) {
        return console.log({
          section: 'renameFile',
          message: renameError.message,
          error: renameError,
          renamedFilePath,
          filePath,
        });
      }
    });
  }
}
