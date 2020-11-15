#stage 1
FROM node:14-alpine as build-step
LABEL MAINTAINER LLA
RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz
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


