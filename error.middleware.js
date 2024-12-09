const errorResponder = (err, request, response, next) => {
    // Встановлюємо тип контенту як JSON
    response.header("Content-Type", 'application/json');
    // Встановлюємо статус помилки і відправляємо повідомлення
    response.status(err.statusCode || 500).send({ message: err.message || "Internal Server Error" });
 };
 
 module.exports = { errorResponder };
 