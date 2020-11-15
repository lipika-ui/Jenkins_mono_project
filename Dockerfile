#stage 1
FROM node:14-alpine as build-step
LABEL MAINTAINER LLA
WORKDIR /var/jenkins_home/workspace/Strorybook_1
COPY . .
FROM nginx:alpine
#!/bin/sh
COPY ./nginx.conf /etc/nginx/nginx.conf
#
### Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /var/jenkins_home/workspace/Strorybook_1/storybook-static /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]


