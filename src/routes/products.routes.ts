import { Router } from 'express';

const productsRouter = Router();

productsRouter.post('/', (req, res) => {
    const products = [
        { id: 1, name: 'tênis' },
        { id: 2, name: 'camisa' },
        { id: 3, name: 'boné' },
    ];

    console.log(req.body)

    return res.json(products);
});

export default productsRouter;
