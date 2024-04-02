import { CleanSatMiningFacility } from "@/models/Site";

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

async function fetchTokens(): Promise<CleanSatMiningFacility[]> {
  try {
    const response = await fetch(API_CONFIG_facilities_URL);
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

export default fetchTokens;
