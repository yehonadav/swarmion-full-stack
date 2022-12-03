import {
  // getHandlerPath,
  LambdaFunction,
} from '@swarmion/serverless-helpers';

import { getHandlerPath } from '@swarmion-full-stack/utils';

const config: LambdaFunction = {
  environment: {},
  // handler: 'functions/{functionName}/handler.main',
  handler: getHandlerPath(__dirname),
  events: [
    {
      httpApi: {
        method: 'get',
        path: '/new-service/health',
      },
    },
  ],
};

export default config;
