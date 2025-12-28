#FROM node:latest
#
#WORKDIR /app
#
#COPY . .
#
#RUN npm install
#
#CMD [ "npm","start" ]


# First Imporvments


#My code
#Multi-stage Dockerfile
#Stage 1:- 
#FROM node:18-alpine as build

#WORKDIR /app

#COPY package*.json ./

#RUN npm install --production

#COPY . .

#RUN npm run build

# Stage 2

#FROM node:18-alpine

#RUN npm install -g serve

#WORKDIR /app

#COPY --from=build /app/build ./build

#EXPOSE 3000

#CMD ["serve","-s","build","-l","3000"]




# Second Improvement 



#My code
#Multi-stage Dockerfile
#Stage 1:-
#FROM node:18-alpine as build

#WORKDIR /app

#COPY package*.json ./

#RUN npm install

#COPY . .

#RUN npm run build

# Stage 2

#FROM nginx:alpine

#COPY --from=build /app/build /usr/share/nginx/html

#EXPOSE 80

#CMD ["nginx","-g","daemon off;"]


#Third Improvement
#My code

#Multi-stage Dockerfile
#Stage 1:-
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# faster build times with npm ci
RUN npm ci 

COPY . .

RUN npm run build

# Stage 2

FROM nginx:alpine

#vulnerability testing with old nginx image with trivy
#FROM nginx:1.22.1-alpine

#FROM gcr.io/distroless/nginx

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]