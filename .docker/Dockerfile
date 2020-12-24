FROM node:10-alpine as build

ARG SENTRY_DSN
ENV SENTRY_DSN $SENTRY_DSN

ARG SENTRY_URL
ENV SENTRY_URL $SENTRY_URL

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN $SENTRY_AUTH_TOKEN

# Set the working directory, copy dependency management files to the working directory
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .

RUN npm run predeploy

# Start the server for Next.js using Node.js
CMD ["npm", "run", "start"]