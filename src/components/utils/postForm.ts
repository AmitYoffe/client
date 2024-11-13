const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const postForm = async (
  formJson: Record<string, any>,
  endpoint: string
) => {
  try {
    const response = await fetch(`${Server_API}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in creation of object:", error);
  }
};
