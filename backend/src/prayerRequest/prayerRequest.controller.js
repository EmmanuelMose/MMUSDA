import * as prayerService from "../prayerRequest/prayerRequest.service.js";

export const createPrayerRequest = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, title, description, requestedBy, isPublic } = req.body;

    if (!firstName || !lastName || !title) {
      return res.status(400).json({ success: false, message: "firstName, lastName, and title are required" });
    }

    const result = await prayerService.createPrayerRequest({ firstName, lastName, phoneNumber, title, description, requestedBy, isPublic });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPublicPrayerRequests = async (req, res) => {
  try {
    const requests = await prayerService.getPublicPrayerRequests();
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
