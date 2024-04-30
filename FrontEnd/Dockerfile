# FROM node
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install
# COPY . /usr/src/app
# EXPOSE 5000
# CMD ["npm", "start"]


FROM node as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy frontend source code
COPY . .

# Copy SSL key and certificate files
COPY ../private/server.key /tmp/server.key
COPY ../private/server.crt /tmp/server.crt

# Build your frontend application here

# Final image
FROM node

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

# Copy SSL key and certificate files from temporary directory
COPY --from=builder /tmp/server.key /etc/ssl/private/server.key
COPY --from=builder /tmp/server.crt /etc/ssl/private/server.crt

EXPOSE 5000

CMD ["node", "app.js"]
