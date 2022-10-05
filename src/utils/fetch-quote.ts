export const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }
}
