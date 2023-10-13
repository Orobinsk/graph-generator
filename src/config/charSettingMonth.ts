import {ChartData} from 'chart.js';
import {IChartDataItem} from "../types/types";
import {getLastMonthDates} from "../helpers/getLastMonthDates";

export const chartOptionsMonth = {
    responsive: true,
    scales: {
        y: {
            display: false,
        },
        x: {
            labels: getLastMonthDates(),
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export function chartSetting(data: IChartDataItem): ChartData<'line', { key: string, totalAmount: number } []> {
    function compareDates(a: { key: string, totalAmount: number }, b: { key: string, totalAmount: number }) {
        const dateA = new Date('2023-' + a.key);
        const dateB = new Date('2023-' + b.key);

        return dateA.getTime() - dateB.getTime();
    }

    // Сортировка массивов данных по дате.
    data.expenses.sort(compareDates);
    data.income.sort(compareDates);
    data.revenue.sort(compareDates);
    data.debt.sort(compareDates);
    data.all.sort(compareDates);

    return {
        datasets: [
            {
                label: 'Затраты',
                data: data.expenses,
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
                data: data.income,
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
                data: data.revenue,
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
                data: data.debt,
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
                data: data.all,
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

