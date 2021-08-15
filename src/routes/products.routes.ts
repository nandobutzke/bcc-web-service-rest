import { Router } from 'express';

const productsRouter = Router();

productsRouter.post('/', (request, response) => {
    return response.json({ message: 'Teste' });
});

export default productsRouter;
