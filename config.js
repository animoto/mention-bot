var exports = module.exports = {};

function getPackageConfig() {
  return require('./package.json').config;
}

function getConfigJSON() {
  return require('./config.json');
}



function buildConfig() {
  var packageConfig = getPackageConfig();
  var configJson = getConfigJSON();
  var mergedConfig = Object.assign(packageConfig, configJson);
  var config = {}
  config.github = {
    host: process.env.GHE_HOST || mergedConfig.gheHost || 'github.com',
    apiHost: process.env.GHE_API_HOST || mergedConfig.gheHost || 'api.github.com',
    protocol: process.env.GHE_PROTOCOL || mergedConfig.gheProtocol || 'https',
    pathPrefix: process.env.GHE_PATH_PREFIX || mergedConfig.ghePathPrefix || null,
    port: process.env.GHE_PORT || mergedConfig.ghePort || 443
  };

  config.gh = config.github;

  return config;
}

exports = Object.assign(exports,buildConfig());

// exports.github = {
//   host: process.env.GHE_HOST || mergedConfig.gheHost || 'github.com',
//   apiHost: process.env.GHE_API_HOST || mergedConfig.gheHost || 'api.github.com',
//   protocol: process.env.GHE_PROTOCOL || mergedConfig.gheProtocol || 'https',
//   pathPrefix: process.env.GHE_PATH_PREFIX || mergedConfig.ghePathPrefix || null,
//   port: process.env.GHE_PORT || mergedConfig.ghePort || 443
// };

// exports.gh = exports.github;
