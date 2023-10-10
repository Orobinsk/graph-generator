import React, {FC} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, ChartData,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {DataItem} from "../../types/types";
import filterAndSumByMonth from "../filterAndSumByMonth";
import cls from './ChartComponent.module.scss'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface ChartComponentProps {
    dataTransactions: DataItem[]
}


const ChartComponent: FC<ChartComponentProps> = (props) => {
    const {dataTransactions} = props

    const expansesTransactions = dataTransactions.filter((data) => data.type === "expanses")
    const revenueTransactions = dataTransactions.filter((data) => data.type === "revenue")
    const incomeTransactions = dataTransactions.filter((data) => data.type === "income")
    const debtTransactions = dataTransactions.filter((data) => data.type === "debt")


    const expansesTransactionsByMonth = filterAndSumByMonth(expansesTransactions)
    const revenueTransactionsByMonth = filterAndSumByMonth(revenueTransactions)

    // console.log(dataTransactions, expansesTransactions, revenueTransactions)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    // const labels = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    // const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Выручка',
    //             data: expansesTransactionsByMonth.map((transfer)=> Number(transfer.totalAmount)),
    //             borderColor: 'rgb(255, 99, 132)',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             tension: 0.5
    //         },
    //         {
    //             label: 'Затраты',
    //             data: [15, 25, 10,12,15,15, 25, 10,12,15,15, 25, 10,12,15],
    //             borderColor: 'rgb(53, 162, 235)',
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         },
    //     ],
    // };

    const datasets: ChartData<'line', { month: string, totalAmount: number } []> = {
        datasets: [{
            label: 'Затраты',
            data: expansesTransactionsByMonth.map((transfer) => transfer),
            borderColor: '#30C7DC',
            backgroundColor: '#30C7DC',
            tension: 0.5,
            parsing: {
                xAxisKey: 'month',
                yAxisKey: 'totalAmount'
            }
        }, {
            label: 'Выручка',
            data: revenueTransactionsByMonth.map((transfer) => transfer),
            borderColor: '#73CF7A',
            backgroundColor: '#73CF7A',
            tension: 0.5,
            parsing: {
                xAxisKey: 'month',
                yAxisKey: 'totalAmount'
            }
        },
        ],
    };

    // {
    //     "month": "Январь",
    //     "totalAmount": 114820
    // },
    return (
        <div className={cls.container}>
            <h3></h3>
            <div className={cls.chart}>
                <Line options={options} data={datasets}/>
                {/*<pre>{JSON.stringify({expansesTransactionsByMonth}, null, 2)}</pre>*/}
            </div>
        </div>

    );
};

export default ChartComponent;
