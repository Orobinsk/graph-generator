import React, {FC, useEffect, useState} from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import cls from './ChartComponent.module.scss'

import classNames from "classnames";
import {chartOptions, chartSetting} from "../../config/chartSetting";

import filterAndSumByMonth from "../filterAndSumByMonth";
import {chartNavBtn} from "../../const/const";
import {IChartDataItem, IDataItem} from "../../types/types";
import {allAmountByType} from "../../helpers/allAmountByType";

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
    data: IDataItem[]
}

const ChartComponent: FC<ChartComponentProps> = (props) => {
    const {data} = props
    const [selectedButton, setSelectedButton] = useState(2);
    const [dataChart, setDataChart] = useState<IChartDataItem>({
        expenses: [],
        revenue: [],
        income: [],
        debt: [],
        all:[]
    });

    useEffect(() => {
        const filteredTransitionByMonth = filterAndSumByMonth(data);


        setDataChart(filteredTransitionByMonth)
    }, [data])

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };
console.log(dataChart)
    const datasets = chartSetting(dataChart)
    const totalAmount = allAmountByType(data)

    const labels = [
        {circle: cls.circle1, labelName: 'Выручка', count: `₽ ${totalAmount.revenue}`},
        {circle: cls.circle2, labelName: 'Затраты', count: `₽ ${totalAmount.expenses}`},
        {circle: cls.circle3, labelName: 'Прибыль', count: `₽ ${totalAmount.income}`},
        {circle: cls.circle4, labelName: 'Задолженность', count: `₽ ${totalAmount.debt}`},
        {
            circle: cls.circle5,
            labelName: 'Итог',
            count: `₽ ${totalAmount.revenue - totalAmount.expenses + totalAmount.income - totalAmount.debt}`
        },
    ]

    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <h3 className={cls.title}>Общая статистика</h3>
                <div className={cls.chartNav}>
                    {chartNavBtn.map((item, index) => (
                        <button
                            key={index}
                            className={classNames(cls.navBtn, {
                                [cls.selectedBtn]: selectedButton === index,
                            })}
                            onClick={() => handleButtonClick(index)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className={cls.chart}>
                <Line options={chartOptions} data={datasets} width={1056} height={254}/>
            </div>
            <div className={cls.labels}>
                {labels.map((item, index) => (
                    <div key={index} className={cls.labelContainer}>
                        <div className={classNames(cls.circle, item.circle)}></div>
                        <div className={cls.label}>
                            <p className={cls.labelName}>{item.labelName}</p>
                            <p className={cls.count}>{item.count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartComponent;
