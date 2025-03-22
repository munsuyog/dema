# Use Node.js version 14 as base image
FROM node:latest as dev

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port used by your application
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "preview"]
