
# Use Node.js LTS (Long Term Support) as base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["npm", "run", "dev"]
