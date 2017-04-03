import secrets from './config-secrets'

const cfg = {
  "garageWaitTime": 15000,
  "statusCheckInterval": 30000,
};

module.exports = Object.assign({}, cfg, secrets)
