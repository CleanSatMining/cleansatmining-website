export const CONFIG_SITES_URL = "https://data.cleansatmining.com/tokens.json";

async function fetchTokens(): Promise<any[]> {
  try {
    const response = await fetch(CONFIG_SITES_URL);
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
