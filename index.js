const baseReleaseConfig = require('./release.config.js');

module.exports = {
  ...baseReleaseConfig,
  skipTag: true,
  plugins: ['@semantic-release/commit-analyzer', './release-scripts/application-info'],
};