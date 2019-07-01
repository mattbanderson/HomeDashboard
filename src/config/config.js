import secrets from './config-secrets'

const cfg = {
  "garageWaitTime": 15000,
};

module.exports = Object.assign({}, cfg, secrets)
