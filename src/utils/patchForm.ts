const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const patchForm = async (
  formJson: Record<string, any>,
  endpoint: string,
  id: number
) => {
  try {
    const updatedFields = Object.fromEntries(
      Object.entries(formJson).filter(([_key, value]) => value.trim() !== "")
    );

    if (Object.keys(updatedFields).length === 0) {
      console.error("No field values given for PATCH.");
      return;
    }

    const response = await fetch(`${Server_API}/${endpoint}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in patching of object:", error);
  }
};
