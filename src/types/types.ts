export interface IDataItem {
    division: string;
    date: string;
    amount: string;
    type: 'expenses' | 'revenue' |'income'|'debt';
}

export interface IChartDataItem {
    [key: string]: { key: string; totalAmount: number }[];
}



