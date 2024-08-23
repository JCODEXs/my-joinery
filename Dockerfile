FROM node:20-alpine AS deps
# RUN apk update && apk upgrade &&     apk add --no-cache git
# ENV PORT 80
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN node --max-old-space-size=8192
# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install -g npm@latest
RUN npm install

## second stage
FROM node:20-alpine AS builder

# Copying source files
# COPY . /usr/src/app
 COPY . .
 COPY --from=deps /node_modules ./usr/src/app/node_modules
# Building app
RUN npm run build
FROM node:20alpine as runner 
# RUN npm cache clean --force
# ENV HOST=0.0.0.0
COPY --from=builder /.next/astandalone ./usr/src/app
 EXPOSE 3000
 EXPOSE 80
 ENV PORT 3000 
 ENV PORT 80
 EXPOSE 8080
# Running the app
# CMD ["npm","run","wsserver"]
CMD HOSTNAME="0.0.0.0" node server.js


