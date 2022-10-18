import { getTrigger } from '@swarmion/serverless-contracts';
import {
  // getHandlerPath,
  LambdaFunction,
} from '@swarmion/serverless-helpers';

import { getUserContract } from '@swarmion-full-stack/users-contracts';
import { getHandlerPath } from '@swarmion-full-stack/utils';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [getTrigger(getUserContract)],
};

export default config;
