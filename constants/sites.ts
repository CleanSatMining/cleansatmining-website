import { CleanSatMiningSite } from "@/models/Site";

export const JSON_CONFIG_SITES_URL =
  "https://data.cleansatmining.com/tokens.json";
export const API_CONFIG_SITES_URL = "/api/sites";

async function fetchJSONTokens(): Promise<any[]> {
  try {
    const response = await fetch(JSON_CONFIG_SITES_URL);
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

async function fetchTokens(): Promise<CleanSatMiningSite[]> {
  try {
    const response = await fetch(API_CONFIG_SITES_URL);
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