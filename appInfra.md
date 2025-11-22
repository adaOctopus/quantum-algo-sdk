# Testing Commands

## Development Mode (Recommended for Testing)
```bash
npm run dev
```
- Starts the server with hot reload
- Runs on port 3000 (or PORT env var)
- Automatically restarts on file changes
- Uses `ts-node-dev` to run TypeScript directly

## Production Mode
```bash
npm run build    # First compile TypeScript to JavaScript
npm start        # Then run the compiled server
```

## Other Useful Commands
```bash
npm run lint     # Check code quality
npm run format   # Format code with Prettier
```

# How The SDK Works

This project serves **two purposes**:

## 1. As an SDK Library (For Other Developers)
When someone installs your package via npm:
```javascript
import { matrixMultiply, matrixTranspose, Matrix } from 'quantum-algo-sdk';
```
They get the functions from `src/lib/matrix.ts`:
- `matrixMultiply()` - Multiply two matrices
- `matrixTranspose()` - Transpose a matrix
- `Matrix` type definition

The `package.json` points to:
- `"main": "dist/lib/matrix.js"` - The compiled JavaScript
- `"types": "dist/lib/matrix.d.ts"` - TypeScript type definitions

## 2. As an Express API Server (For Testing/Demo)
When you run `npm run dev` or `npm start`, it:
1. Starts an Express server (`src/server.ts`)
2. Sets up middleware (`src/app.ts`)
3. Exposes REST API endpoints:
   - `GET /health` - Server health check
   - `GET /api/quantum/health` - Quantum service health
   - `POST /api/quantum/matrix/multiply` - Multiply matrices via API
   - `POST /api/quantum/matrix/transpose` - Transpose matrix via API

# Testing the API Endpoints

Once the server is running (`npm run dev`), you can test with:

## Health Check:
```bash
curl http://localhost:3000/health
```

## Multiply Matrices:
```bash
curl -X POST http://localhost:3000/api/quantum/matrix/multiply \
  -H "Content-Type: application/json" \
  -d '{"matrixA": [[1,2],[3,4]], "matrixB": [[5,6],[7,8]]}'
```

## Transpose Matrix:
```bash
curl -X POST http://localhost:3000/api/quantum/matrix/transpose \
  -H "Content-Type: application/json" \
  -d '{"matrix": [[1,2,3],[4,5,6]]}'
```

# Architecture Flow

```
User installs SDK → Gets lib/matrix.ts functions (SDK usage)
     OR
Developer runs server → Express API → Controllers → lib/matrix.ts functions
```

The Express server is useful for:
- Testing the SDK functions
- Providing a REST API wrapper
- Demo/showcase purposes
- Integration testing

The core SDK functions in `lib/matrix.ts` are the reusable library code that others can import and use directly.

