import React from 'react';
import ConsolidatedReportPage from "./pages/ConsolidatedReportPage";
import NavBar from "./components/NavBar/NavBar";
import cls from './App.module.scss'


function App() {
    return (
        <div className={cls.App}>
            <NavBar/>
            <ConsolidatedReportPage/>
        </div>
    );
}

export default App;
