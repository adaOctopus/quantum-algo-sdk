// Matrix operations - core quantum algorithm helper functions

export type Matrix = number[][];

/**
 * Multiply two matrices A and B.
 * Throws an error if dimensions do not match.
 */
export function matrixMultiply(A: Matrix, B: Matrix): Matrix {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
    throw new Error(
      `Matrix multiplication not possible: A.columns (${colsA}) != B.rows (${rowsB})`
    );
  }

  const result: Matrix = Array.from({ length: rowsA }, () =>
    Array(colsB).fill(0)
  );

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

/**
 * Compute the transpose of a matrix.
 */
export function matrixTranspose(M: Matrix): Matrix {
  const rows = M.length;
  const cols = M[0].length;
  const result: Matrix = Array.from({ length: cols }, () =>
    Array(rows).fill(0)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = M[i][j];
    }
  }

  return result;
}

