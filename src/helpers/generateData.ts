import {IDataItem} from "../types/types";

const types: IDataItem['type'][] = ['expenses', 'revenue','income','debt'];

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: string, end: string): string {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTimestamp = getRandomNumber(startDate, endDate);
    return new Date(randomTimestamp).toISOString();
}

function generateRandomData(): IDataItem {
    const division = Math.random() < 0.5 ? 'B2B' : 'B2C';
    const date = getRandomDate('2023-01-01', '2023-12-31');
    const amount = getRandomNumber(1000, 30000);
    const type = types[getRandomNumber(0, 3)];

    return {
        division,
        date,
        amount: amount.toString(),
        type,
    };
}

function  generateData(countData:number) {
    const newData: IDataItem[] = [];
    for (let i = 0; i < countData; i++) {
        newData.push(generateRandomData());
    }
    newData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return newData;
}

export default generateData
