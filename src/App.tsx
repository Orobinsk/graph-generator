import React, {useEffect, useState} from 'react';
import './App.css';
import ChartComponent from "./components/ChartComponent";
import generateData from "./helpers/generateData";
import {DataItem} from "./types/types";
import filterDataByLastMonth from "./helpers/filterDataByLastMonth";
import filterDataByLastWeek from "./helpers/filterDataByLastWeek";
import {Months} from "./const/const";

function App() {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        const newData = generateData(2000)
        const lastMonthData =filterDataByLastMonth(newData)
        const lastWeekData=filterDataByLastWeek(newData)
        setData(newData)
        console.log(Months)
    }, [])

    return (
        <div className="App">
            <ChartComponent dataTransactions={data}/>
        </div>
    );
}

export default App;
