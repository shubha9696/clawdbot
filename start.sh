#!/bin/bash

# Install Clawdbot globally
npm install -g clawdbot

# Start the gateway
clawdbot gateway --port ${PORT:-18789} --host 0.0.0.0
