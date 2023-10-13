export function getLastWeekDates() {
    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(lastWeek.getDate() - 7);

    const dateArray = [];

    while (currentDate > lastWeek) {
        const month = String(lastWeek.getMonth() + 1).padStart(2, '0');
        const day = String(lastWeek.getDate()).padStart(2, '0');
        const date = `${month}-${day}`;

        dateArray.push(date);

        lastWeek.setDate(lastWeek.getDate() + 1);
    }

    return dateArray;
}