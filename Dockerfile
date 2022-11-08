# Name the node stage "builder"
FROM node:17.0.0 AS builder

# Set working directory
WORKDIR /app

# Copy app dependencies
COPY package.json package.json
COPY yarn.lock yarn.lock

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install node modules
RUN yarn install

# Copy all files from current directory to working dir in image
COPY . .

# Publish the port
EXPOSE 3000

# Start app
CMD ["yarn", "start"]
