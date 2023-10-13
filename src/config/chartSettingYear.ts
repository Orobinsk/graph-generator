import { ChartData } from 'chart.js';
import {IChartDataItem} from "../types/types";

export const chartOptionsYear = {
    responsive: true,
    scales: {
        y: {
            display: false,
        },
        x: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        }
    },
    plugins: {
        legend: {
            display: false,
        },

    },
};

export function chartSettingYear(data: IChartDataItem): ChartData<'line', { key: string, totalAmount: number } []> {
    const monthOrder = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    const monthIndexMap: { [key: string]: number } = {};
    monthOrder.forEach((month, index) => {
        monthIndexMap[month] = index;
    });

    const expensesData = [...data.expenses];
    const incomeData = [...data.income];
    const revenueData = [...data.revenue];
    const debtData = [...data.debt];
    const allData = [...data.all];

    expensesData.sort((a, b) => monthIndexMap[a.key] - monthIndexMap[b.key]);
    incomeData.sort((a, b) => monthIndexMap[a.key] - monthIndexMap[b.key]);
    revenueData.sort((a, b) => monthIndexMap[a.key] - monthIndexMap[b.key]);
    debtData.sort((a, b) => monthIndexMap[a.key] - monthIndexMap[b.key]);
    allData.sort((a, b) => monthIndexMap[a.key] - monthIndexMap[b.key]);


    return {
        datasets: [
            {
                label: 'Затраты',
                data: expensesData,
                borderColor: '#30C7DC',
                backgroundColor: '#30C7DC',
                tension: 0.5,
                parsing: {
                    xAxisKey: 'key',
                    yAxisKey: 'totalAmount',
                },
            },
            {
                label: 'Прибыль',
                data: incomeData,
                borderColor: '#45AAF2',
                backgroundColor: '#45AAF2',
                tension: 0.5,
                parsing: {
                    xAxisKey: 'key',
                    yAxisKey: 'totalAmount',
                },
            },
            {
                label: 'Выручка',
                data: revenueData,
                borderColor: '#73CF7A',
                backgroundColor: '#73CF7A',
                tension: 0.5,
                parsing: {
                    xAxisKey: 'key',
                    yAxisKey: 'totalAmount',
                },
            },
            {
                label: 'Задолженность',
                data: debtData,
                borderColor: '#F5E230',
                backgroundColor: '#F5E230',
                tension: 0.5,
                parsing: {
                    xAxisKey: 'key',
                    yAxisKey: 'totalAmount',
                },
            },
            {
                label: 'Итог',
                data: allData,
                borderColor: '#AC74FC',
                backgroundColor: '#AC74FC',
                tension: 0.5,
                parsing: {
                    xAxisKey: 'key',
                    yAxisKey: 'totalAmount',
                },
            },
        ],
    };
}
