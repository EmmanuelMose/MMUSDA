import { APIDomain } from "../../utils/APIDomain";

export async function createOffering(data) {
  const response = await fetch(`${APIDomain}/api/offerings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create offering");
  }

  const result = await response.json();
  return result.offering;
}

export async function getOfferingByPhoneAndName(phoneNumber, name = "") {
  if (!phoneNumber) throw new Error("phoneNumber is required");

  const params = new URLSearchParams({ phoneNumber });
  if (name) params.append("name", name);

  const response = await fetch(`${APIDomain}/api/offerings/search?${params.toString()}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch offering");
  }

  const data = await response.json();
  return data.length > 0 ? data[0] : null;
}