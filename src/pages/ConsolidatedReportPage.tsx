import React, {FC, useEffect, useState} from 'react';
import cls from './ConsolidatedReportPage.module.scss'
import ChartComponent from "../components/ChartComponent/ChartComponent";
import generateData from "../helpers/generateData";
import DivisionsButtons from "../components/DivisionsButtons/DivisionsButtons";
import {IDataItem} from "../types/types";


const ConsolidatedReportPage: FC = () => {
    const [data, setData] = useState<IDataItem[]>([])

    useEffect(() => {
        const yearData = generateData(10000)
        setData(yearData)
    }, [])


    return (
        <div className={cls.layoutPage}>
            <h1 className={cls.title}>Сводный отчет</h1>
            <DivisionsButtons data={data}/>
            <ChartComponent data={data}/>
        </div>
    );
};

export default ConsolidatedReportPage;
