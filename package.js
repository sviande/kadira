Package.describe({
  "summery": "APM for Meteor"
});

Npm.depends({
  
});

Package.on_use(function(api) {
  api.use(['minimongo', 'livedata', 'mongo-livedata', 'ejson', 'underscore', 'http', 'email'], ['server']);
  api.add_files([
    'lib/ntp.js',
    'lib/models/methods.js',
    'lib/apm.js',
    'lib/notification_manager.js',
    'lib/hijack/wrap_session.js',
    'lib/hijack/session.js',
    'lib/hijack/db.js',
    'lib/hijack/http.js',
    'lib/hijack/email.js',
    'lib/hijack/async.js'
  ], 'server');

  if(process.env.__TEST_APM_EXPORTS) {
    //use for testing
    var exportFields = process.env.__TEST_APM_EXPORTS.split(',').map(function(v) {
      return v.trim();
    });
    api.export(exportFields);
  } else {
    api.export(['Apm']);
  }
  
});
