import {
  createOffering,
  getAllOfferings,
  getOfferingByPhoneAndName,
  deleteOffering
} from "./offering.service.js";

export const createOfferingController = async (req, res) => {
  try {
    const { phoneNumber, name, amount, purpose } = req.body;
    const offering = await createOffering({ phoneNumber, name, amount, purpose });
    res.status(201).json({ offering });
  } catch {
    res.status(500).json({ error: "Failed to create offering" });
  }
};

export const getAllOfferingsController = async (req, res) => {
  try {
    const data = await getAllOfferings();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch offerings" });
  }
};

export const getByPhoneAndNameController = async (req, res) => {
  try {
    const { phoneNumber, name } = req.query;
    const data = await getOfferingByPhoneAndName(phoneNumber, name);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch offering" });
  }
};

export const deleteOfferingController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOffering(Number(id));
    res.json({ message: "Offering deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete offering" });
  }
};