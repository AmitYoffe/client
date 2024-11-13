const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const patchForm = async (
  formJson: Record<string, any>,
  endpoint: string,
  id: number
) => {
  try {
    if (Object.keys(formJson).length === 0) {
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
      body: JSON.stringify(formJson),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in patching of object:", error);
  }
};
