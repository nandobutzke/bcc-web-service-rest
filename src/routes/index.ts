import { Router } from 'express';

import productsRouter from './products.routes';
import ordersRouter from './orders.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import orderDetailsRouter from './orderDetails.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);
routes.use('/order-details', orderDetailsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);


export default routes;
