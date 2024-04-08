import { CleanSatMiningFacility } from "@/models/Facility";

export const JSON_CONFIG_facilities_URL =
  "https://data.cleansatmining.com/tokens.json";
export const API_CONFIG_facilities_URL = "/api/facilities";

async function fetchJSONTokens(): Promise<any[]> {
  try {
    const response = await fetch(JSON_CONFIG_facilities_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tokens");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tokens:", error);
    return [];
  }
}

async function fetchFacilities(): Promise<CleanSatMiningFacility[]> {
  try {
    const response = await fetch(API_CONFIG_facilities_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tokens");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return [];
  }
}

export default fetchFacilities;
