import { Router } from 'express';
import healthCheckRoutes from './healthCheck';

const router = Router();

router.use('/', healthCheckRoutes);

// Add other route imports and `router.use('/path', route)` here

export default router;
