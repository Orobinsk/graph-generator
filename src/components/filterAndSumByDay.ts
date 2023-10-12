import {IDataItem} from "../types/types";

const filterAndSumByDay = (transactions: IDataItem[]) => {
    const currentDate = new Date();
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const lastMonthStart = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
    const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    const dateSums: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date);

        if (date >= lastMonthStart && date <= lastMonthEnd) {
            const dateKey = date.toISOString().split('T')[0]; // Используем дату в формате YYYY-MM-DD как ключ

            if (dateSums[dateKey]) {
                dateSums[dateKey] += parseFloat(transaction.amount);
            } else {
                dateSums[dateKey] = parseFloat(transaction.amount);
            }
        }
    });

    return Object.keys(dateSums).map((dateKey) => ({
        key: dateKey,
        totalAmount: dateSums[dateKey],
    }));
};

export default filterAndSumByDay;
