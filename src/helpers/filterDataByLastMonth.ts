import {DataItem} from "../types/types";


function filterDataByLastMonth(data: DataItem[]): DataItem[] {
    const currentDate = new Date();
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(currentDate.getMonth() - 1);

    return data.filter((item) => new Date(item.date) < currentDate && lastMonth < new Date(item.date));
}


export default filterDataByLastMonth;
