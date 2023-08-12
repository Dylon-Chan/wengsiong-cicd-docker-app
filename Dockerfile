#use nodejs with latest version
FROM node:latest

#set working directory
WORKDIR /app

#install the app dependencies
#use wildcare to copy both package.json and package-lock.json
COPY package*.json ./
RUN npm install

#bundle app source
COPY . .

#expose port
EXPOSE 8080

#start the app
CMD ["npm", "start"]

