# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN DISABLE_ESLINT_PLUGIN=true npm run build

# Expose the port your app runs on
EXPOSE 5000

# Command to run your app
CMD ["npm", "start"]