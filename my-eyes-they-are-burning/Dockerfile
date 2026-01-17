# Stage 1: Build the React application
# Use a specific Node version for reproducibility. 'alpine' images are smaller.
FROM node:24-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml)
# This leverages Docker's layer caching. 'npm install' only runs if these files change.
COPY package*.json ./
# If using pnpm, use: COPY pnpm-lock.yaml ./
# If using yarn, use: COPY yarn.lock ./

# Install project dependencies
RUN npm install
# If using pnpm, use: RUN npm install -g pnpm && pnpm install
# If using yarn, use: RUN yarn install

# Copy the rest of the application's source code
COPY . .

# Build the application for production
# This creates the 'dist' folder
RUN npm run build

# ---

# Stage 2: Serve the application with Nginx
# Use a lightweight and stable Nginx image
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
# This file will be created in the next step
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the 'builder' stage to the default Nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chmod -R a+rx /usr/share/nginx/html

# Expose port 80 to indicate which port the container is listening on
EXPOSE 80

# The default Nginx command will start the server, so no CMD is needed.

