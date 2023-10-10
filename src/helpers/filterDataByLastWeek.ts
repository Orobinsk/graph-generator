import {DataItem} from "../types/types";


function filterDataByLastWeek(data: DataItem[]): DataItem[] {
    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);
// console.log(lastWeek)
    return data.filter((item) => new Date(item.date) < currentDate && lastWeek < new Date(item.date));
}


export default filterDataByLastWeek;
