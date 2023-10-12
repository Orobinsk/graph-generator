import { ChartData } from 'chart.js';
import {IChartDataItem} from "../types/types";

export const chartOptions = {
    responsive: true,
    scales: {
        y: {
            display: false,
        },
        // x: {
        //     labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'], // Здесь указываете свои месяцы
        // }
    },
    plugins: {
        legend: {
            display: false,
        },

    },
};

export function chartSetting(data: IChartDataItem): ChartData<'line', { key: string, totalAmount: number } []> {
    return {
        datasets: [
            {
                label: 'Затраты',
                data: data.expenses.map((transfer) => transfer),
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
                data: data.income.map((transfer) => transfer),
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
                data: data.revenue.map((transfer) => transfer),
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
                data: data.debt.map((transfer) => transfer),
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
                data: data.all.map((transfer) => transfer),
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
