// src/controllers/sermons.controller.js
import SermonsService from '../sermons/sermons.service.js';

const SermonsController = {
  // GET /api/sermons/initial
  getInitialSermons: async (req, res) => {
    try {
      const data = await SermonsService.getInitialSermons();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch initial sermons' });
    }
  },

  // GET /api/sermons/all
  getAllSermons: async (req, res) => {
    try {
      const data = await SermonsService.getAllSermons();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch all sermons' });
    }
  },

  // POST /api/sermons
  createSermon: async (req, res) => {
    try {
      const { title, sermonDate, videoUrl, description } = req.body;
      if (!title || !sermonDate) {
        return res.status(400).json({ error: 'Title and sermonDate are required' });
      }
      const newSermon = await SermonsService.createSermon({ title, sermonDate, videoUrl, description });
      res.status(201).json(newSermon);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create sermon' });
    }
  },

  // DELETE /api/sermons/:id
  deleteSermon: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await SermonsService.deleteSermon(parseInt(id));
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Sermon not found' });
      }
      res.json({ message: 'Sermon deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete sermon' });
    }
  },
};

export default SermonsController;
