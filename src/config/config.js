import secrets from './config-secrets'

const cfg = {
  "garageWaitTime": 15000,
  "version": "1.2.0 (2021.12.21)"
};

module.exports = Object.assign({}, cfg, secrets)
