import {IDataItem} from "../../../types/types";

export function filterAndSumTotalAmount(data: IDataItem[], divisionFilter?: string): number {
    let filteredData = data
    if (divisionFilter) {
        filteredData = filteredData.filter((item) => item.division === divisionFilter);
    }

    return filteredData.reduce((total, item) => {
        const amount = parseFloat(item.amount);
        switch (item.type) {
            case "income":
            case "revenue":
                return total + amount;
            case "debt":
            case "expenses":
                return total - amount;
            default:
                return total;
        }
    }, 0);
}


