FROM node:14
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9999
CMD [ "npm", "start" ]