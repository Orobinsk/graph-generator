import {IDataItem} from "../../../types/types";


function filterDataByLastWeek(data: IDataItem[]): IDataItem[] {
    const currentDate = new Date();
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);
    return data.filter((item) => new Date(item.date) < currentDate && lastWeek < new Date(item.date));
}


export default filterDataByLastWeek;
