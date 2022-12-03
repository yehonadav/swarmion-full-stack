import executor from './executor';
import { BuildExecutorSchema } from './schema';

const options: BuildExecutorSchema = {};

describe('Build Executor', () => {
  it('can run', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const output = await executor(options);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(output.success).toBe(true);
  });
});
