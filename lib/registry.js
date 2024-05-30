var Q = require('q');
var fs = require('fs-extra');
var tmp = require('tmp');
var _ = require('lodash');
var path = require('path');

var tags = require('./tags');
var config = require('./config');


// Return a list of versions available in the registry (npm)
function availableVersions() {
    return Promise.resolve(['3.2.3']);
}

// Resolve a version name or tag to an installable absolute version
function resolveVersion(version) {
    return Promise.resolve('3.2.3');
}

// Install a specific version of gitbook
function installVersion(version, forceInstall) {
}

module.exports = {
    versions: availableVersions,
    resolve: resolveVersion,
    install: installVersion
};
