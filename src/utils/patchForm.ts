const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const patchForm = async (
  formJson: Record<string, any>,
  endpoint: string,
  id: number
) => {
  try {
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
    console.error("Error in creation of object:", error);
  }
};

// Bug fix on edit:
// the json that is sent through the network should not include untouched fields,
// currently if i edit one line it send it like so:
// {firstName: "Xyz", lastName: "", movies: ""}
// and not
// {firstName: "Xyz"}
