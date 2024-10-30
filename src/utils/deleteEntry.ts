const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const deleteEntry = async (endpoint: string, id: number) => {
  try {
    const response = await fetch(`${Server_API}/${endpoint}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in deletion of object:", error);
  }
};
