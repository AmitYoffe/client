export const sanitizeJson = (formJson: { [k: string]: any }) => {
    const updatedFields = Object.fromEntries(
        Object.entries(formJson).filter(([_, value]) => value.trim() !== "")
    );

    return updatedFields
}