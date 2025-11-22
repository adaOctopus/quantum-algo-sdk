// Main routes file - aggregates all route definitions
import { Router } from 'express';
import quantumRoutes from './quantum.routes';

const router = Router();

// Mount routes
router.use('/api/quantum', quantumRoutes);

export default router;

