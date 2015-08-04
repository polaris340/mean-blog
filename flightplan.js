'use strict';
var plan = require('flightplan');

var REMOTE_PROJECT_DIR = '/home/ubuntu/blog';

plan.target('deploy', [
    {
        host: 'blog.jiho.me',
        username: 'ubuntu',
        privateKey: '/Users/jiho/.ssh/id_rsa',
        agent: process.env.SSH_AUTH_SOCK
    }
]);

plan.local(function (local) {
    var filesToCopy = local.exec('git ls-files', {silent: true});
    local.transfer(filesToCopy, REMOTE_PROJECT_DIR);
});

plan.remote(function (remote) {
    remote.exec('cd ' + REMOTE_PROJECT_DIR + ' && npm install');
    remote.sudo('forever stopall');
    remote.sudo('forever start ' + REMOTE_PROJECT_DIR + '/server.js');
});