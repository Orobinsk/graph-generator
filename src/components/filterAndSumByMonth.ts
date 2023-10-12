import {monthNames} from "../const/const";
import {IChartDataItem, IDataItem} from "../types/types";


const filterAndSum = (yearData: IDataItem[], type: string) => {
    const transactions = yearData.filter((data) => data.type === type);
    const monthSums: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date);
        const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

        if (monthSums[month]) {
            monthSums[month] += parseFloat(transaction.amount);
        } else {
            monthSums[month] = parseFloat(transaction.amount);
        }
    });

    return Object.keys(monthSums).map((month) => ({
        key: `${monthNames[month.substring(5, 7)]}`,
        totalAmount: monthSums[month]
    }));

};
// const sortArray = (array: any[]) => {
//     return array.sort((a, b) => a.key.localeCompare(b.key, 'ru'));
// };

const filterAndSumByMonth = (yearData: IDataItem[]) => {
    const types = ["expenses", "revenue", "income", "debt"];
    const data: IChartDataItem = {
        expenses: [],
        revenue: [],
        income: [],
        debt: [],
        all: []
    };

    types.forEach((type) => {
        data[type] = filterAndSum(yearData, type);
        // data[type] = sortArray(data[type]);
    });

    const monthSums: { [key: string]: number } = {};

    types.forEach((type) => {
        const isExpenseOrDebt = type === "expenses" || type === "debt";

        data[type].forEach((monthData) => {
            const monthName = monthData.key;
            const totalAmount = monthData.totalAmount;

            if (monthSums[monthName]) {
                monthSums[monthName] += isExpenseOrDebt ? -totalAmount : totalAmount;
            } else {
                monthSums[monthName] = isExpenseOrDebt ? -totalAmount : totalAmount;
            }
        });
    });

    data.all = Object.keys(monthSums).map((month) => ({
        key: month,
        totalAmount: monthSums[month]
    }));
    // data.all = sortArray(data.all)


    return data;
};

export default filterAndSumByMonth
