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

import filterAndSumByMonth from "./helpers/filterAndSumByMonth";
import {chartNavBtn} from "../../const/const";
import {IChartDataItem, IData, IDataItem} from "../../types/types";
import {allAmountByType, IAllAmountByType} from "./helpers/allAmountByType";
import filterAndSumByDay from "./helpers/filterAndSumByDay";
import filterDataByLastMonth from "./helpers/filterDataByLastMonth";
import filterDataByLastWeek from "./helpers/filterDataByLastWeek";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const ChartComponent: FC<IData> = (props) => {
    const {data} = props
    const [selectedButton, setSelectedButton] = useState('Год');

    const [dataChart, setDataChart] = useState<IChartDataItem>({
        expenses: [],
        revenue: [],
        income: [],
        debt: [],
        all: []
    });
    const [totalAmount, setTotalAmount] = useState<IAllAmountByType>({
        expenses: 0,
        revenue: 0,
        income: 0,
        debt: 0,
    })

    // const totalAmount = allAmountByType(data)

    useEffect(() => {
        const filteredTransitionByMonth = filterAndSumByMonth(data);
        setDataChart(filteredTransitionByMonth)
        setTotalAmount(allAmountByType(data))
    }, [data])

    function handleButtonClick(name: string) {
        setSelectedButton(name);
        if (name === 'Год') {
            const filteredTransitionByMonth = filterAndSumByMonth(data);
            setDataChart(filteredTransitionByMonth)
            setTotalAmount(allAmountByType(data))
        } else if (name === 'Месяц') {
            const filteredTransitionByDay = filterDataByLastMonth(data)
            const chartDataByMoth = filterAndSumByDay(filteredTransitionByDay)
            setDataChart(chartDataByMoth)
            setTotalAmount(allAmountByType(filteredTransitionByDay))
        } else {
            const filteredTransitionByDay = filterDataByLastWeek(data)
            const chartDataByMoth = filterAndSumByDay(filteredTransitionByDay)
            setDataChart(chartDataByMoth)
            setTotalAmount(allAmountByType(filteredTransitionByDay))
        }
    }

    const datasets = chartSetting(dataChart)

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
                                [cls.selectedBtn]: selectedButton === item.name,
                            })}
                            onClick={() => handleButtonClick(item.name)}
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
