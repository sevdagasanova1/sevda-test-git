const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Импорт маршрутизатора пользователей
const userRouter = require('./user/user.router');

// Используем bodyParser для обработки JSON
app.use(bodyParser.json());

// Используем маршрутизатор пользователей
app.use(userRouter);

const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error('Ошибка при запуске сервера:', err);
    } else {
        console.log(`Сервер запущен на порту ${PORT}`);
    }
});
