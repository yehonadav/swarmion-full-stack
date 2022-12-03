# Swarmion example

This template is an fullstack example of a project generated with [Swarmion](https://github.com/swarmion/swarmion).

## Documentation

Find the Swarmion documentation on [swarmion.dev](https://www.swarmion.dev)

## Commands

These commands have to be run at the root of the project.

- `nvm use`: set the version of node set in `.nvmrc`
- `pnpm`: install node dependencies in all packages;
- `pnpm package`: compile the common packages;
- `pnpm test`: launch the tests in all packages;
- `pnpm deploy`: deploy all the end services in order;
- `pnpm generate-service myService`: create a simple service in the repository's structure respecting our guidelines
- `pnpm generate-library myLibrary`: create a simple internal library in the repository's structure respecting our guidelines
- `cd frontend/app && pnpm start`: start the frontend application
- `pnpm nx build {projectName} --verbose`: build 1 project
- `cd {projectPath} && pnpm install`: install 1 project
- `pnpm nx deploy {projectName} --verbose`: deploy 1 project
- `pnpm nx remove {projectName} --verbose`: remove 1 project

## Windows OS  
* if you are using windows as your OS, run your scripts using git bash in administrator mode.  
* after creating a new service, go to its config.ts file and import { getHandlerPath } from '@swarmion-full-stack/utils';  
* add @swarmion-full-stack/utils to the project's package.json  

## starting a new project
when starting a new project, run the `rename-project.ts` script to rename the project  
you can test it with `git clone https://github.com/yehonadav/swarmion-full-stack.git your-new-project-name`  
to change the script you mut compile it first: `tsc rename-project.ts --target es2019 --module Node16`  
and then run `node rename-project.js`  
if you are running on a Windows OS run the script with git bash in administrator mode.  

## lint issues  
if you cant commit because of linting you can skip this step by running:  
`git commit --no-verify -am "feat(x): message"`  
