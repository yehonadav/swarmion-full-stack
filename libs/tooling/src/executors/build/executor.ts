import { BuildExecutorSchema } from './schema';

const runExecutor = async (
  options: BuildExecutorSchema,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<{ success: boolean }> => {
  console.log('Executor ran for Build', options);

  return {
    success: true,
  };
};

export default runExecutor;
