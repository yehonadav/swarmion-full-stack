import { utils } from '@swarmion-full-stack/utils';

export const main = async (): Promise<string> => {
  const utilsValue = utils();

  console.log({ utilsValue });

  return Promise.resolve('ok');
};
