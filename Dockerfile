# Use official Node.js image
FROM node:22-slim

# Install system updates
RUN apt-get update && apt-get install -y curl

# Set working directory
WORKDIR /app

# Install Clawdbot globally
RUN npm install -g clawdbot

# Expose the port Railway expects
ENV PORT=8080
EXPOSE 8080

# Start command
CMD clawdbot gateway --port $PORT --host 0.0.0.0 --verbose --accept-tos
