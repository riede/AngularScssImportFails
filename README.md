# AngularScssImportFails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Reproduce the behaviour

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The app starts without any warnings or errors.

Run `ng serve --prod` to build and serve the app in production mode. The app starts without an error. But several warnings occurs. Here you can see the warnings:

```sh
WARNING in Unexpected '}' at 18:33.

WARNING in Invalid character(s) '}

' at 18:33. Ignoring.

WARNING in Invalid property name 'html.themable {
        size' at /Users/priedemann/Development/angular-scss-import-fails/src/styles/portal.scss:2:0. Ignoring.
```

You can also uncomment bootstrap as 3rd party in `theme-green.scss` and in `theme-blue.scss` to get other warnings. It seems that all Warnings occurs by an `@media print` definition.