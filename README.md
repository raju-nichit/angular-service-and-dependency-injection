# Angular Services and Dependency Injection 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

##
Service used for write common code across component and  central data store 
Example->Logging Service 
![service and di2](https://user-images.githubusercontent.com/31009314/43679253-f5ee9c58-983f-11e8-80e3-35ec09ed1bc9.PNG)

1.When we declare service under app.module file providers array the only one instance are available at application.

2.When we delclare service under Add component then same instance available at its child component but not in another services.

3.When we declare component specific service inside provider[] then each time new instance are available. 
![service hirarachie](https://user-images.githubusercontent.com/31009314/43679254-f62b527e-983f-11e8-8bc0-f6b1c5c8bafd.PNG)


## Dependency Injection
  At the time injecting one service into another serivce that time we spectify dependent service by using @Injectable() decorator.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
