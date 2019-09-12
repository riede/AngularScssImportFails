# AngularScssImportFails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Reproduce the behaviour

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The app starts without any warnings or errors.

Run `ng serve --prod` to build and serve the app in production mode. The app starts without an error. But several warnings occurs. The `@media print` statement in the bootstrap styles is removed by angular`s optimization. The closing braket is still there. Because of that a warning occurs that the braket is unexpected. Here you can see the warnings:

```sh
WARNING in Unexpected '}' at 6269:31.

WARNING in Unexpected '}' at 12539:31.

WARNING in Invalid character(s) '}

' at 12539:31. Ignoring.

WARNING in Invalid property name '.theme-green {
        size' at /Users/priedemann/Development/angular-scss-import-fails/src/styles/theme-green.scss:5:0. Ignoring.

WARNING in Invalid selector '}

.theme-blue' at /Users/priedemann/Development/angular-scss-import-fails/node_modules/bootstrap/scss/_print.scss:137:5. Ignoring.

WARNING in Invalid property name '.theme-blue {
        size' at /Users/priedemann/Development/angular-scss-import-fails/src/styles/theme-blue.scss:5:0. Ignoring.
```
