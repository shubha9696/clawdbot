// Clawdbot Server for Railway Deployment
const { spawn } = require('child_process');
const path = require('path');

const PORT = process.env.PORT || 8080;
const SETUP_PASSWORD = process.env.SETUP_PASSWORD || 'ClawdBot2024!Secure';

console.log('🦞 Starting Clawdbot Gateway...');
console.log('Port:', PORT);
console.log('Setup password is configured:', !!SETUP_PASSWORD);

// Install clawdbot globally first
console.log('Installing clawdbot...');
const install = spawn('npm', ['install', '-g', 'clawdbot'], {
  stdio: 'inherit',
  shell: true
});

install.on('close', (code) => {
  if (code !== 0) {
    console.error('Failed to install clawdbot');
    process.exit(1);
  }
  
  console.log('✅ Clawdbot installed successfully');
  console.log('Starting gateway...');
  
  // Start the gateway
  const gateway = spawn('clawdbot', [
    'gateway',
    '--port', PORT.toString(),
    '--host', '0.0.0.0',
    '--verbose'
  ], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env }
  });
  
  gateway.on('error', (err) => {
    console.error('Failed to start gateway:', err);
    process.exit(1);
  });
  
  gateway.on('close', (code) => {
    console.log('Gateway exited with code:', code);
    process.exit(code || 0);
  });
  
  console.log('✅ Clawdbot gateway started on port', PORT);
  console.log('🌐 Access setup at: /setup');
});

install.on('error', (err) => {
  console.error('Failed to install clawdbot:', err);
  process.exit(1);
});
