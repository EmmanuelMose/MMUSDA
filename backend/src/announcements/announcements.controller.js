import {
  getAllAnnouncementsService,
  getAnnouncementsFromDateService,
  getAnnouncementByIdService,
} from "./announcements.service.js";

// Get all announcements
export const getAllAnnouncements = async (req, res) => {
  try {
    const data = await getAllAnnouncementsService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get announcements from a start date only
export const getAnnouncementsFromDate = async (req, res) => {
  try {
    const { startDate } = req.query;

    if (!startDate) {
      return res.status(400).json({ message: "startDate is required" });
    }

    const data = await getAnnouncementsFromDateService(
      new Date(startDate)
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get announcement by ID
export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await getAnnouncementByIdService(
      Number(req.params.id)
    );

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
