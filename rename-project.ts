import {
  readdirSync,
  // renameSync
  readFile,
  // writeFile,
} from 'fs';
import {
  // poop
  basename,
  extname,
  join,
  sep,
} from 'path';

const projectName = 'swarmion-full-stack';

// put the new name here
const renamedProjectName = __dirname.split(sep).slice(-1)[0] as string;

if (
  (renamedProjectName as string | undefined) === undefined ||
  renamedProjectName.length === 0
)
  throw new Error('failed to extract renamedProjectName');

if (renamedProjectName === projectName)
  throw new Error('renamedProjectName must be different from projectName');

console.log({
  message: 'found project name',
  projectName,
  renamedProjectName,
});

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
  replaceFileText({
    filePath: filePath,
    text: projectName,
    newText: renamedProjectName,
  });

  const extension = extname(filePath);
  const filename = basename(filePath, extension);
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