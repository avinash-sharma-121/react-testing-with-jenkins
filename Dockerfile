#FROM node:latest
#
#WORKDIR /app
#
#COPY . .
#
#RUN npm install
#
#CMD [ "npm","start" ]

#Stage 1:- 
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

# Stage 2

FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]
