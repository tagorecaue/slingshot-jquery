Package.describe({
  name: 'tagore:slingshot-jquery',
  summary: 'Client template for uploads using "edgee:slingshot" based on tomi:upload-jquery',
  version: '0.0.1',
  git: 'https://github.com/tagorecaue/slingshot-jquery.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['reactive-var', 'templating'], 'client');

  api.addFiles([
    'lib/vendor/jquery.ui.widget.js',
    'lib/jquery.iframe-transport.js',
    'lib/jquery.fileupload.js',
  ], ['client']);

  api.addFiles([
    'main.css',
    'templates/queueItem.html',
    'templates/queueItem.js',
    'templates/upload.html',
    'templates/upload.js',
    'templates/buttons.html',
    'templates/buttons.js',
    'templates/dropzone.html',
    'templates/dropzone.js',
    'uploader.js'], 'client');

  api.export('Uploader', 'client');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('tomi:upload-client');
//  api.addFiles('upload-client-tests.js');
//});
