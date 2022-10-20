import * as path from 'path';

export const utils = (): string => {
  return 'ok!';
};

export const getHandlerPath = (directoryPath: string): string => {
  const processRunLocation = process.cwd();

  const handlerPath =
    directoryPath.replace(processRunLocation + path.sep, '') +
    path.sep +
    'handler.main';

  // for cross-platform support, handler would look like: functions/{funcName}/handler.main
  const handlerPathSplit = handlerPath.split('functions', 2);
  if (handlerPathSplit[1] === undefined)
    throw new Error('handler path should start with functions/...');

  return 'functions' + handlerPathSplit[1].split(path.sep).join('/');
};
