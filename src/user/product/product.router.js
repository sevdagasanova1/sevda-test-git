const express = require('express');
const db = require('../db');
const { products, users } = require('../db/schema');
const { eq } = require('drizzle-orm');  // Импортируем eq для фильтрации по пользователю

const router = express.Router();

// POST /products — создание нового продукта
router.post('/products', async (request, response) => {
   const { body } = request;

   await db.insert(products).values(body);  // добавляем новый продукт в базу данных

   return response.sendStatus(201);  // статус 201 — создано
});

// GET /products — получение всех продуктов
router.get('/products', async (request, response) => {
   try {
       const allProducts = await db.select().from(products);  // получаем все продукты из базы данных
       return response.json(allProducts);  // отправляем продукты в формате JSON
   } catch (error) {
       console.error('Error fetching products:', error);
       return response.status(500).json({ error: 'Не удалось получить продукты' });  // если ошибка, отправляем статус 500
   }
});

// GET /users/:id/products — получение продуктов определенного пользователя
router.get('/users/:id/products', async (request, response) => {
   const { id } = request.params;  // Получаем id пользователя из параметров маршрута

   try {
       // Фильтруем продукты по userId, который равен id пользователя
       const userProducts = await db.query.products.findMany({
           where: eq(products.userId, +id)  // Преобразуем id в число и фильтруем по userId
       });

       // Если продукты найдены, возвращаем их
       return response.json(userProducts);
   } catch (error) {
       console.error('Error fetching user products:', error);
       return response.status(500).json({ error: 'Не удалось получить продукты пользователя' });  // Ошибка
   }
});

module.exports = router;
