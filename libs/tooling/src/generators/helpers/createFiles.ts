import { generateFiles, names, Tree } from '@nrwl/devkit';

import { NormalizedSchema } from '../types';

export const createFiles = (
  tree: Tree,
  options: NormalizedSchema,
  sourcePath: string,
): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  const { className, name, propertyName } = names(options.name);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  generateFiles(tree, sourcePath, options.packageRoot, {
    ...options,
    dot: '.',
    className,
    name,
    propertyName,
    cliCommand: 'nx',
    strict: undefined,
    tmpl: '',
  });
};
