import { getTrigger } from '@swarmion/serverless-contracts';
import {
  // getHandlerPath,
  LambdaFunction,
} from '@swarmion/serverless-helpers';
import * as path from 'path';

import { getUserContract } from '@swarmion-full-stack/users-contracts';

const getHandlerPath = (directoryPath: string) => {
  const processRunLocation = process.cwd();

  return (
    directoryPath.replace(processRunLocation + path.sep, '') +
    path.sep +
    'handler.main'
  );
};

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(getUserContract)],
};

export default config;
