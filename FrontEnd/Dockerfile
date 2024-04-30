# FROM node
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install
# COPY . /usr/src/app
# EXPOSE 5000
# CMD ["npm", "start"]



FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy SSL key and certificate files
COPY server.key /etc/ssl/private/server.key
COPY server.crt /etc/ssl/private/server.crt

# Expose port
EXPOSE 5000

# Command to run the application
CMD ["node", "app.js"]
