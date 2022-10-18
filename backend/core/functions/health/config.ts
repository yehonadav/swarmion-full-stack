import {
  // getHandlerPath,
  LambdaFunction,
} from '@swarmion/serverless-helpers';

import { getHandlerPath } from '@swarmion-full-stack/utils';

const config: LambdaFunction = {
  environment: {},
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/health',
      },
    },
  ],
};

export default config;
