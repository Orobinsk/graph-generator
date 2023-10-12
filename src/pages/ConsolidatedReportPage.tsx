import React, {FC, useEffect, useState} from 'react';
import cls from './ConsolidatedReportPage.module.scss'
import ChartComponent from "../components/ChartComponent/ChartComponent";
import generateData from "../helpers/generateData";
import DivisionsButtons from "../components/DivisionsButtons/DivisionsButtons";
import {filterAndSumTotalAmount} from "../helpers/filterAndSumTotalAmount";
import {IDataItem} from "../types/types";


const ConsolidatedReportPage: FC = () => {
    const [data, setData] = useState<IDataItem[]>([])

    useEffect(() => {
        const yearData = generateData(400)

        setData(yearData)

        const divisionFilter = "B2B";
        const totalAmount = filterAndSumTotalAmount(yearData, divisionFilter);

        // console.log(`Сумма для ${divisionFilter}: ${totalAmount}`);
    }, [])


    return (
        <div className={cls.layoutPage}>
            <h1 className={cls.title}>Сводный отчет</h1>
            <DivisionsButtons/>
            <ChartComponent data={data}/>
        </div>
    );
};

export default ConsolidatedReportPage;
