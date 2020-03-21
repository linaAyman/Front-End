# base image
FROM node:alpine as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --save core-js@^3
RUN npm install -g @angular/cli@8.3.5
RUN npm install --save-dev @angular-devkit/build-angular

# add app
COPY . .

#run build
RUN ng build --prod

#nginx
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
