const Server_API = process.env.NEXT_PUBLIC_API_URL;

export const fetchAPI = async (endpoint: string, options?: RequestInit) => {
    const response = await fetch(`${Server_API}/${endpoint}`, options);

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};