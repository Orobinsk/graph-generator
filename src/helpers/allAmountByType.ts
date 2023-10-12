import { IDataItem } from "../types/types";

interface IAllAmountByType {
    expenses: number,
    revenue: number,
    income: number,
    debt: number,
}

 function amountByType(data: IDataItem[], targetType: "income" | "revenue" | "debt" | "expenses"): number {
    const filteredData = data.filter((item) => item.type === targetType);

    return filteredData.reduce((total, item) => {
        const amount = parseFloat(item.amount);
        return total + amount;
    }, 0);
}

export function allAmountByType(data: IDataItem[])  {
    const types: ("income" | "revenue" | "debt" | "expenses")[] = ["expenses", "revenue", "income", "debt"];
    const allTotalAmount: IAllAmountByType = {
        expenses: 0,
        revenue: 0,
        income: 0,
        debt: 0,
    };

    types.forEach((type) => {
        allTotalAmount[type] = amountByType(data, type);
    });

    return allTotalAmount;
}
