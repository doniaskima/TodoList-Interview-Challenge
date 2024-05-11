# Base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production --ignore-scripts

# Copy the application code
COPY . .

# Build the application (if necessary)
# RUN npm run build

# Expose the port (if necessary)
# EXPOSE <port>

# Set the command to start the application
CMD ["npm", "start"]
