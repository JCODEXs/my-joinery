# FROM node:latest
# # RUN apk update && apk upgrade &&     apk add --no-cache git
# # ENV PORT 80
# # Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# RUN node --max-old-space-size=8192
# # Installing dependencies
# COPY package*.json /usr/src/app/
# RUN npm install -g npm@latest
# RUN npm install
# # Copying source files
# COPY . /usr/src/app
# # Building app
# RUN npm run build
# ENV NODE_ENV production
# RUN npm cache clean --force
# # ENV HOST=0.0.0.0
#  EXPOSE 443
#  EXPOSE 80
#  EXPOSE 1234
#  EXPOSE 8080
# # Running the app
# # CMD ["npm","run","wsserver"]
# CMD [ "npm", "start"]

FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --only=production

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Expose the necessary ports
EXPOSE 80
EXPOSE 443
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

LABEL Name=my-accounting Version=v1