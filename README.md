# ember-migrate-global-app

Example EmberCLI project with a custom resolver and module wrapper:

- [Resolver](https://github.com/Darep/ember-migrate-global-app/blob/master/app/resolver.js) adds support for using underscores in Ember.js files
- [Module wrapper](https://github.com/Darep/ember-migrate-global-app/blob/master/app/app.js#L7) adds support for declaring Ember.js components, controllers, models, routes etc. with the legacy `App.FooComponent` pattern (only one module per file though!)

Note that the resolver and module wrapper are both shipped in the JS bundle and will be executed in the client's browser! My personal advice is to not run this indefinitely but only during the migration process to EmberCLI's conventions.

## Usage

Copy the resolver and module wrapper to your EmberCLI project and modify them to your needs. E.g. if your directory structure does not conform to EmberCLI's convention, you can modify the module paths with the [resolver](https://github.com/Darep/ember-migrate-global-app/blob/master/app/resolver.js).

## License

MIT
