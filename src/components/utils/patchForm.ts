const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const patchForm = async (
  formJson: Record<string, any>,
  endpoint: string,
  id: number
) => {
  // the api should know what info it should get, this logic that trims that unnecessary fields should be inside the component itself, not here
  try {
    const updatedFields = Object.fromEntries(
      Object.entries(formJson).filter(([_, value]) => value.trim() !== "")
    );

    if (Object.keys(updatedFields).length === 0) {
      console.error(
        `No values of object with id: ${id} given for PATCH method.`
      );
      return id;
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
