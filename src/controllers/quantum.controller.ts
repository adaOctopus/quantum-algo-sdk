// Quantum algorithm controller - handles HTTP requests and responses
import { Request, Response } from 'express';
import { matrixMultiply, matrixTranspose, Matrix } from '../lib/matrix';

/**
 * Health check endpoint
 */
export function health(req: Request, res: Response): void {
  res.status(200).json({ status: 'ok', service: 'quantum-algo-sdk' });
}

/**
 * Multiply two matrices
 * POST /api/quantum/matrix/multiply
 * Body: { matrixA: number[][], matrixB: number[][] }
 */
export function multiplyMatrices(req: Request, res: Response): void {
  try {
    const { matrixA, matrixB } = req.body;

    if (!matrixA || !matrixB) {
      res.status(400).json({ error: 'Both matrixA and matrixB are required' });
      return;
    }

    if (!Array.isArray(matrixA) || !Array.isArray(matrixB)) {
      res.status(400).json({ error: 'Both matrixA and matrixB must be arrays' });
      return;
    }

    const result = matrixMultiply(matrixA as Matrix, matrixB as Matrix);
    res.status(200).json({ result });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(400).json({ error: errorMessage });
  }
}

/**
 * Transpose a matrix
 * POST /api/quantum/matrix/transpose
 * Body: { matrix: number[][] }
 */
export function transposeMatrix(req: Request, res: Response): void {
  try {
    const { matrix } = req.body;

    if (!matrix) {
      res.status(400).json({ error: 'Matrix is required' });
      return;
    }

    if (!Array.isArray(matrix)) {
      res.status(400).json({ error: 'Matrix must be an array' });
      return;
    }

    const result = matrixTranspose(matrix as Matrix);
    res.status(200).json({ result });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(400).json({ error: errorMessage });
  }
}

