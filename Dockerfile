# Use Node.js LTS image as the base image
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx image as the base image for serving the React app
FROM nginx:alpine

# Copy the built React app from the previous stage to nginx's html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
