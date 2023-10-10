export interface DataItem {
    division: string;
    date: string;
    amount: string;
    type: 'expanses' | 'revenue' |'income'|'debt';
}
