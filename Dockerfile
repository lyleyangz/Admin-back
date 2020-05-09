FROM nginx
COPY ./dist /app/dist
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/
COPY ./nginx/app.conf /etc/nginx/conf.d/