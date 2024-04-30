# FROM node
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install
# COPY . /usr/src/app
# EXPOSE 5000
# CMD ["npm", "start"]


# FROM node as builder

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install

# # Copy frontend source code
# COPY . .

# # Copy SSL key and certificate files
# COPY ../private/server.key /tmp/server.key
# COPY ../private/server.crt /tmp/server.crt

# # Build your frontend application here

# # Final image
# FROM node

# WORKDIR /usr/src/app

# COPY --from=builder /usr/src/app .

# # Copy SSL key and certificate files from temporary directory
# COPY --from=builder /tmp/server.key /etc/ssl/private/server.key
# COPY --from=builder /tmp/server.crt /etc/ssl/private/server.crt

# EXPOSE 5000

# CMD ["node", "app.js"]





# FROM node

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package.json ./
# RUN npm install

# # Bundle app source
# COPY . .

# # Copy SSL key and certificate files
# COPY /home/jagritia998/project-docker-123/private/server.key /usr/src/app/server.key
# COPY /home/jagritia998/project-docker-123/private/server.crt /usr/src/app/server.crt

# # Expose port
# EXPOSE 5000

# # Run the application
# CMD ["npm", "start"]


# FROM node

# # Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the server key file
# COPY /home/jagritia998/project-docker-123/private/server.key /usr/src/app/server.key
# COPY /home/jagritia998/project-docker-123/private/server.crt /usr/src/app/server.crt
# # Copy the rest of the application
# COPY . .

# # Expose port
# EXPOSE 5000

# # Command to run the application
# CMD ["npm", "start"]


FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy server key file
COPY private/server.key /usr/src/app/server.key

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]

