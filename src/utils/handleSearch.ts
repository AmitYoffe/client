const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const handleSearch = async (query: string, endpoint: string) => {
  try {
    const response = await fetch(`${Server_API}/${endpoint}?search=${query}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const results = await response.json();
    return results;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
