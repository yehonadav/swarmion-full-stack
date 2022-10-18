import * as path from 'path';

export const utils = (): string => {
  return 'ok!';
};

export const getHandlerPath = (directoryPath: string): string => {
  const processRunLocation = process.cwd();

  return (
    directoryPath.replace(processRunLocation + path.sep, '') +
    path.sep +
    'handler.main'
  );
};
