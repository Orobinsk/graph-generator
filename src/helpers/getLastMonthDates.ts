export function getLastMonthDates() {
    const currentDate = new Date();
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const dateArray = [];

    while (currentDate > lastMonth) {
        const month = String(lastMonth.getMonth() + 1).padStart(2, '0');
        const day = String(lastMonth.getDate()).padStart(2, '0');
        const date = `${month}-${day}`;

        dateArray.push(date);

        lastMonth.setDate(lastMonth.getDate() + 1);
    }

    return dateArray;
}
