import {DataItem} from "../types/types";
import {monthNames} from "../const/const";


const filterAndSumByMonth = (transactions: DataItem[]) => {
    const monthSums: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date);

        // Sun Jan 01 2023 23:22:01 GMT+0300 (Москва, стандартное время) => 2023-01
        const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        if (monthSums[month]) {
            monthSums[month] += parseFloat(transaction.amount);
        } else {
            monthSums[month] = parseFloat(transaction.amount);
        }
    });

    // Сортировка месяцев по возрастанию
    const sortedMonths = Object.keys(monthSums).sort((a, b) => a.localeCompare(b));


    return sortedMonths.map((month) => ({
        month: `${monthNames[month.substring(5, 7)]}`,
        totalAmount: monthSums[month],
    }));

};

export default filterAndSumByMonth;
