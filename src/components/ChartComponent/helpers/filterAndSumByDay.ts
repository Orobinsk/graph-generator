import {monthNames} from "../../../const/const";
import {IChartDataItem, IDataItem} from "../../../types/types";


const filterAndSum = (yearData: IDataItem[], type: string) => {
    const transactions = yearData.filter((data) => data.type === type);
    const daySums: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date);
        const day = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

        if (daySums[day]) {
            daySums[day] += parseFloat(transaction.amount);
        } else {
            daySums[day] = parseFloat(transaction.amount);
        }
    });

    return Object.keys(daySums).map((day) => ({
        key: day.substring(5, 10),
        totalAmount: daySums[day]
    }));

};

const filterAndSumByDay = (yearData: IDataItem[]) => {
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
    });

    const daySums: { [key: string]: number } = {};

    types.forEach((type) => {
        const isExpenseOrDebt = type === "expenses" || type === "debt";

        data[type].forEach((dayData) => {
            const dayName = dayData.key;
            const totalAmount = dayData.totalAmount;

            if (daySums[dayName]) {
                daySums[dayName] += isExpenseOrDebt ? -totalAmount : totalAmount;
            } else {
                daySums[dayName] = isExpenseOrDebt ? -totalAmount : totalAmount;
            }
        });
    });

    data.all = Object.keys(daySums).map((day) => ({
        key: day,
        totalAmount: daySums[day]
    }));

    return data;
};

export default filterAndSumByDay
