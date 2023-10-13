import {getLastWeekDates} from "../helpers/getLastWeekDates";

export const chartOptionsWeek = {
    responsive: true,
    scales: {
        y: {
            display: false,
        },
        x: {
            labels: getLastWeekDates(),
        }
    },
    plugins: {
        legend: {
            display: false,
        },

    },
};