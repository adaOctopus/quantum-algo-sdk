// Quantum algorithm routes
import { Router } from 'express';
import { health, multiplyMatrices, transposeMatrix } from '../controllers/quantum.controller';

const router = Router();

// Define routes
router.get('/health', health);
router.post('/matrix/multiply', multiplyMatrices);
router.post('/matrix/transpose', transposeMatrix);

export default router;

