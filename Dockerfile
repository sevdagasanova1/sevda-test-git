# Используем официальный образ nginx в качестве базового образа
FROM nginx

# Удаляем все файлы по умолчанию в папке /usr/share/nginx/html в образе
RUN rm -rf /usr/share/nginx/html/*

# Копируем файл index.html в контейнер
COPY ./index.html /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
