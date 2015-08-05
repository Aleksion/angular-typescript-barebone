# angular-typescript-barebone
A barebone project with angular and typescript. Made from the gulp-angular-typescript generator, with a few modifications. Typescript is compiled using a tsconfig.json file (works better with vsCode), made a gulp command for automatically filling files in the tsconfig.json. .ts unit tests are found and run. And editor specific references are handled in references.d.ts files, that should be in each module. Each module file : SAMPLE.module.ts should then have a : 
/// <reference path="references.d.ts" /> at the top.

This was done to reduce the amount of reference tags in the code files. 
