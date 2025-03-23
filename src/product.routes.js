// handle get request for path /products/:id
router.get('/products/:id', (request, response) => {
    const { id } = request.params; // Access the id parameter from the URL
 
    // Find the product by id
    const product = products.find(product => product.id === id);
 
    if (product) {
       response.json(product); // Send the product as a JSON response
    } else {
       const err = new Error("Product not found");
       err.statusCode = 404;
       throw err;
    }
 });
 