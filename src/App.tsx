import React, {useEffect, useState} from 'react';
import './App.css';
import ChartComponent from "./components/ChartComponent/ChartComponent";
import generateData from "./helpers/generateData";
import {DataItem} from "./types/types";
import filterDataByLastMonth from "./helpers/filterDataByLastMonth";

function App() {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        const newData = generateData(400)
        const lastMonthData =filterDataByLastMonth(newData)
        // const lastWeekData=filterDataByLastWeek(newData)
        setData(newData)
        console.log(newData)
    }, [])

    return (
        <div className="App">
            <ChartComponent dataTransactions={data}/>
        </div>
    );
}

export default App;
