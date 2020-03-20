# base image
FROM node:12.2.0 as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.5

# add app
COPY . .

#run build
RUN ng build --prod

#nginx
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
