// src/routes/sermons.router.js
import express from 'express';
import SermonsController from '../controllers/sermons.controller.js';

const router = express.Router();

router.get('/initial', SermonsController.getInitialSermons);  // First 3 sermons
router.get('/all', SermonsController.getAllSermons);          // All sermons
router.post('/', SermonsController.createSermon);             // Create sermon
router.delete('/:id', SermonsController.deleteSermon);        // Delete sermon by ID

export default sermonRouter;
