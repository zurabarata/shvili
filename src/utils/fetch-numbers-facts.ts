export const fetchNumbersFacts = async (number: number) => {
    const response = await fetch(`http://numbersapi.com/${number}`);
    const data = await response.text();

    if (response.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}
