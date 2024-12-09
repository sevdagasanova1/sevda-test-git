const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware'); // Підключаємо обробник помилок

const app = express();
const PORT = 3000;

app.use(logRequest); // Логування запитів
app.use(productRoutes); // Обробка маршрутів продуктів
app.use(errorResponder); // Обробка помилок

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
