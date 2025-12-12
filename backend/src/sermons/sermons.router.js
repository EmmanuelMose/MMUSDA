// src/routes/sermons.router.js
import express from 'express';
import SermonsController from '../sermons/sermons.controller.js';

const sermonsRouter = express.Router(); // Use this name

// Define routes
sermonsRouter.get('/initial', SermonsController.getInitialSermons);  // First 3 sermons
sermonsRouter.get('/all', SermonsController.getAllSermons);          // All sermons
sermonsRouter.post('/', SermonsController.createSermon);             // Create sermon
sermonsRouter.delete('/:id', SermonsController.deleteSermon);        // Delete sermon by ID

export default sermonsRouter; // Export the same name
