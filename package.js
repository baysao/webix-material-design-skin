Package.describe({
  name: 'baysao:meteor-webix-skin-material',
  version: '0.1.0-1',
  // Brief, one-line summary of the package.
  summary: 'Meteor Webix',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/baysao/meteor-webix.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');

  api.use([
    "baysao:meteor-webix"
  ]);
  api.addFiles(['./skins/material.css'], 'client');
  api.addAssets([
    './fonts/Roboto-Regular-webfont.woff',
    './fonts/Roboto-Medium-webfont.woff',
    './fonts/Roboto-Regular-webfont.svg',
    './fonts/Roboto-Regular-webfont.eot',
    './fonts/Roboto-Regular-webfont.ttf',
    './fonts/Roboto-Medium-webfont.eot',
    './fonts/Roboto-Medium-webfont.ttf',
    './fonts/Roboto-Medium-webfont.svg'], 'client');
  // api.export('webix', 'client');
});

