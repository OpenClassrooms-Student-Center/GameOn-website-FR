FROM nginx
COPY starterOnly /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
